document.addEventListener("DOMContentLoaded", function() {
    var bigmushroom=document.getElementById("bigmushroom");
    var bigmushroomdialouge=document.getElementById("bigmushroomdialouge")
      bigmushroom.onclick= function(){
        if (bigmushroomdialouge.style.display==="none"){
        document.getElementById("bigmushroomdialouge").style.display = "block";
        }
        else{
          document.getElementById("bigmushroomdialouge").style.display = "none";
        }
    }
});