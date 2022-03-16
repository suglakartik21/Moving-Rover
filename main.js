canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["nasaImage1.jpg", "nasaImage2.jpg", "nasaImage3.jpg", "nasaImage4.png"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number);

rover_height = 90;
rover_width = 100;

rover_x = 10;
rover_y = 10;

backround_image = nasa_mars_images_array[random_number];
rover_image = "rover.png";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = backround_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown );

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
     
    if (keyPressed == "37"){
        left();
        console.log("left");
    }

    if (keyPressed == "38"){
        up();
        console.log("up");
    }
    if (keyPressed == "39"){
        right();
        console.log("right");
    }
    if (keyPressed == "40"){
        down();
        console.log("down");
    }
}

function up(){

if(rover_y >= 0){

    rover_y = rover_y - 10;
    console.log("When up key pressed, x = " +rover_x+ " y = " +rover_y);
    uploadBackground();
    uploadRover();
}
}

function down(){

if(rover_y <= 500){

    rover_y = rover_y + 10;
    console.log("When down key pressed, x = " +rover_x+ " y = " +rover_y);
    uploadBackground();
    uploadRover()
}
}

function left(){

if(rover_x >=0){

rover_x = rover_x - 10;
console.log("When left key pressed, x = " +rover_x+ " y = " +rover_y);
uploadBackground();
uploadRover();

}
}

function right(){

if(rover_x <=700){

rover_x = rover_x + 10;
console.log("When right key pressed, x = " +rover_x+ " y = " +rover_y);
uploadBackground();
uploadRover();
}
}