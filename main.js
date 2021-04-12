canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

rover_width= 100;
rover_height= 90;

nasa_img_array=["nasa_image_1.jpg", "nasa_image_2.jpeg", "nasa_image_3.jpg", "nasa_image_4.jpg"];
random_no = Math.floor(Math.random()*4);
rover_x= 350;
rover_y= 250;

background_image=nasa_img_array[random_no];
console.log("background image " + background_image);
rover_image="rover.png"
function add() {
    background_img = new Image();
    background_img.onload= uploadbackground;
    background_img.src=background_image;
    
    rover_img = new Image();
    rover_img.onload= uploadrover;
    rover_img.src=rover_image;
}

function uploadbackground() {
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress == "38"){
        up();
        console.log("up");
    }

    if(keypress == "40"){
        down();
        console.log("down");
    }

    if(keypress == "37"){
        left();
        console.log("left");
    }

    if(keypress == "39"){
        right();
        console.log("right");
    }
}

function up(){
    if(rover_y >=0){
        rover_y=rover_y - 30;
        console.log("when up is pressed, x =" + rover_x + "| y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if(rover_y <= 500){
        rover_y=rover_y + 30;
        console.log("when up is pressed, x =" + rover_x + "| y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function left(){
    if(rover_x >=0){
        rover_x=rover_x - 30;
        console.log("when up is pressed, x =" + rover_x + "| y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if(rover_x <=700){
        rover_x=rover_x + 30;
        console.log("when up is pressed, x =" + rover_x + "| y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}