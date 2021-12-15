img="";
status = "";

function preload(){
    img = loadImage("desktop.jpg");
}
function setup(){
    canvas = createCanvas( 550 , 450);
    canvas.center();
    canvas.position(400,162);

    //initializing cocossd model
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML  =  "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model is loaded");
     status = true;

   objectDetector.detect(img , gotResults);
}

function gotResults(error , results){
    if (error) {
       console.log(error);
    } 
    else {
       console.log(results);
    }
}
function draw(){

    
    image(img , 0 , 0 , 550 , 480);

    noFill();
    fill("#FF0000");
    noFill();
    stroke("#FF0000");
    text("Computer", 75 , 155);
    rect(50, 140 , 420, 180);
    
  
     noFill();
     fill("#FF0000");
     noFill()
     stroke("#FFC0CB");
     text("Keyboard",10,380);
     rect(5,358,462,85);
     
     stroke("#FF0000");

     noFill();
     fill("#FFFF00");
     noFill();
     stroke("#FFFF00");
     text('Mouse',470,370);
     rect(470,360,100,80);
    
}
