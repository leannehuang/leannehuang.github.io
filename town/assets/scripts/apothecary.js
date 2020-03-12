document.addEventListener("DOMContentLoaded", function() {
    var apothecaryperson=document.getElementById("apothecaryperson");
    var apothecarydialouge=document.getElementById("apothecarydialouge")
      apothecaryperson.onclick= function(){
        if (apothecarydialouge.style.display==="none"){
        document.getElementById("apothecarydialouge").style.display = "block";
        }
        else{
          document.getElementById("apothecarydialouge").style.display = "none";
        }
    }
});