window.onload = function() {
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
document.getElementById("imagebank").style.display = "none";

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
ctx.font = "60px Times New Roman";
ctx.fillText("leanne", 290, 160);
ctx.font = "60px Times New Roman";
ctx.fillText("huang", 290, 220);
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
//bottom contain
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
//
ctx.beginPath();
ctx.moveTo(146,520);
ctx.lineTo(146,629);
ctx.stroke();
//
ctx.font = "30px Times New Roman";
ctx.fillText("making", 150, 480);
ctx.font = "30px Times New Roman";
ctx.fillText("this", 170, 510);
ctx.font = "30px Times New Roman";
ctx.fillText("in java", 180, 540);
//
ctx.font = "20px Times New Roman";
ctx.fillText("patience", 40, 840);
ctx.font = "20px Times New Roman";
ctx.fillText("understanding", 40, 860);
//IMAGES
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("selfportrait");
ctx.drawImage(img, 20, 20, 250, 420);
var img = document.getElementById("hobbies");
ctx.drawImage(img, 260, 245);
var img = document.getElementById("nickname");
ctx.drawImage(img, 500, 100);
var img = document.getElementById("birth");
ctx.drawImage(img, 464, 247);
var img = document.getElementById("family");
ctx.drawImage(img, 590, 302);
var img = document.getElementById("live");
ctx.drawImage(img, 320, 440);
var img = document.getElementById("murakami");
ctx.drawImage(img, 315, 440);
var img = document.getElementById("pet");
ctx.drawImage(img, 313, 500);
var img = document.getElementById("music");
ctx.drawImage(img, 352, 499);
var img = document.getElementById("eel");
ctx.drawImage(img, 499, 500);
var img = document.getElementById("movies");
ctx.drawImage(img, 499, 700);
var img = document.getElementById("sport");
ctx.drawImage(img, 360, 700);
var img = document.getElementById("tvshow");
ctx.drawImage(img, 305, 570);
var img = document.getElementById("black");
ctx.drawImage(img, 501, 705);
var img = document.getElementById("moment");
ctx.drawImage(img, 19, 628);
var img = document.getElementById("blank");
ctx.drawImage(img, 257, 442);
var img = document.getElementById("places");
ctx.drawImage(img, 145, 520);
var img = document.getElementById("never");
ctx.drawImage(img, 20, 440);
var img = document.getElementById("child");
ctx.drawImage(img, 154, 632);
var img = document.getElementById("book");
ctx.drawImage(img, 305, 699);
var img = document.getElementById("arthistory");
ctx.drawImage(img, 495, 565);
//ROTATE
ctx.beginPath();
ctx.rotate(20 * Math.PI / 180); 
ctx.rect(555, 65, 150, 150);
ctx.stroke(); 
//
ctx.font = "60px Times New Roman";
ctx.fillText("8/7", 585, 205);
}

