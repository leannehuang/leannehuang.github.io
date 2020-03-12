document.addEventListener("DOMContentLoaded", function() {
    var friendmushroom1=document.getElementById("friendmushroom1");
    var mushroomdialouge=document.getElementById("mushroomdialouge")
      friendmushroom1.onclick= function(){
        if (mushroomdialouge.style.display==="none"){
        document.getElementById("mushroomdialouge").style.display = "block";
        }
        else{
          document.getElementById("mushroomdialouge").style.display = "none";
        }
    }
});