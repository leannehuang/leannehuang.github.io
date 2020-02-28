var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// make_base();
// function make_base()
// {
//   base_image= new Image();
//   base_image.src= "image.png";
//   base_image.onload=function(){
//     ctx.drawImage(base_image, 0, 0);
//   }
// }
//self portrait
ctx.beginPath();
ctx.rect(20, 20, 250, 420);
ctx.stroke();

//horizontal contain
ctx.beginPath();
ctx.rect(270, 100, 450, 400);
ctx.stroke();
//full name line
ctx.beginPath();
ctx.moveTo(270,250);
ctx.lineTo(500,250);
ctx.stroke();
//fullname text
ctx.font = "30px Times New Roman";
ctx.fillText("leanne huang", 280, 150);
//fullname line 2
ctx.beginPath();
ctx.moveTo(500,100);
ctx.lineTo(500,250);
ctx.stroke();
//diamond mid line
ctx.beginPath();
ctx.moveTo(470,330);
ctx.lineTo(610,380);
ctx.stroke();
//right horizontal
ctx.beginPath();
ctx.moveTo(640,302);
ctx.lineTo(720,302);
ctx.stroke();
//hobbies
ctx.beginPath();
ctx.moveTo(270,440);
ctx.lineTo(580,440);
ctx.stroke();
//diamond extend
ctx.beginPath();
ctx.moveTo(590,442);
ctx.lineTo(720,502);
ctx.stroke();
//
ctx.beginPath();
ctx.moveTo(315,440);
ctx.lineTo(500,500);
ctx.stroke();
//
ctx.beginPath();
ctx.rect(20, 440, 480, 450);
ctx.stroke();
//circle
ctx.beginPath();
ctx.arc(500, 695, 195, 0, 2 * Math.PI);
ctx.stroke();
//
ctx.beginPath();
ctx.moveTo(305,702);
ctx.lineTo(695,702);
ctx.stroke();
//
ctx.beginPath();
ctx.moveTo(350,569);
ctx.lineTo(640,830);
ctx.stroke();
//
ctx.beginPath();
ctx.moveTo(360,830);
ctx.lineTo(640,569);
ctx.stroke();
//
ctx.beginPath();
ctx.moveTo(315,440);
ctx.lineTo(315,629);
ctx.stroke();
//
ctx.beginPath();
ctx.moveTo(20,440);
ctx.lineTo(315,629);
ctx.stroke();
//
ctx.beginPath();
ctx.moveTo(20,629);
ctx.lineTo(315,629);
ctx.stroke();
//
ctx.beginPath();
ctx.moveTo(315,629);
ctx.lineTo(156,763);
ctx.stroke();
//
ctx.beginPath();
ctx.moveTo(20,629);
ctx.lineTo(156,763);
ctx.stroke();
//
ctx.beginPath();
ctx.moveTo(156,763);
ctx.lineTo(156,893);
ctx.stroke();
//ROTATE
ctx.beginPath();
ctx.rotate(20 * Math.PI / 180); 
ctx.rect(555, 65, 150, 150);
ctx.stroke(); 
