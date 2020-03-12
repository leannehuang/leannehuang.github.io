document.addEventListener("DOMContentLoaded", function() {
    var evil2=document.getElementById("evil2");
    var evilmushroomdialouge=document.getElementById("evilmushroomdialouge")
      evil2.onclick= function(){
        if (evilmushroomdialouge.style.display==="none"){
        document.getElementById("evilmushroomdialouge").style.display = "block";
        }
        else{
          document.getElementById("evilmushroomdialouge").style.display = "none";
        }
    }
});