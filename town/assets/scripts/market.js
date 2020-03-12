document.addEventListener("DOMContentLoaded", function() {
    var marketperson=document.getElementById("marketperson");
    var marketdialouge=document.getElementById("marketdialouge")
      marketperson.onclick= function(){
        if (marketdialouge.style.display==="none"){
        document.getElementById("marketdialouge").style.display = "block";
        }
        else{
          document.getElementById("marketdialouge").style.display = "none";
        }
    }
});