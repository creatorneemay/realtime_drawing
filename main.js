nosex=0
nosey=0
leftwristx=0
rightwristx=0
diffrence=0
function preload(){}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function modelloaded(){
    console.log("Model Loaded");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        diffrence=floor(leftwristx-rightwristx)
    }
}
function draw(){
    background("#f78c2f");
    stroke("red");
    fill("blue");
    square(nosex,nosey,diffrence);
    document.getElementById("square_size").innerHTML="The size of square = "+diffrence
}
