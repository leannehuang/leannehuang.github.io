document.addEventListener("DOMContentLoaded", function() {
    var farmer=document.getElementById("farmer");
    var farmerdialouge=document.getElementById("farmerdialouge")
      farmer.onclick= function(){
        if (farmerdialouge.style.display==="none"){
        document.getElementById("farmerdialouge").style.display = "block";
        }
        else{
          document.getElementById("farmerdialouge").style.display = "none";
        }
    }
    var farmerdoor=document.getElementById("farmerdoor");
    var choice=document.getElementById("choice")
      farmerdoor.onclick= function(){
        if (choice.style.display==="none"){
        document.getElementById("choice").style.display = "block";
        }
        else{
          document.getElementById("choice").style.display = "none";
        }
    }
});