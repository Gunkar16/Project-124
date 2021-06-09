function preload(){

}

function setup(){
    Canvas = createCanvas(500,500);
    Canvas.position(550,160);
    Video = createCapture(VIDEO);
    Video.size(350,350);
    Video.position(35,210)
    poseNet = ml5.poseNet(Video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model Loaded");
}

function gotPoses(error,results){
    if(error){
        console.log(error);
    }
    else{
        
    }
}

function draw(){
    
}