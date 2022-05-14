song1="";
song2="";

function preload() {
    song1=loadSound("Bilionera.mp3");
    song2=loadSound("Faded.mp3");
}

left_wristX=0;
right_wristX=0;
left_wristY=0;
right_wristY=0;

function setup(){
    canvas=createCanvas(400,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    load=ml5.poseNet(video,model_loaded);
load.on("pose",gotposes);
}

function draw() {
    image(video,0,0,400,350);
}

function model_loaded(){
    console.log("Your model has been initializing")
}

function gotposes(results){
    if(results.length>0){
        left_wristY=results[0].pose.leftWrist.y;
        left_wristX=results[0].pose.leftWrist.x;
        right_wristX=results[0].pose.rightWrist.x;
        right_wristY=results[0].pose.rightWrist.y;
    }

}