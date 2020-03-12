document.addEventListener("DOMContentLoaded", function() {
    var mug=document.getElementById("mug");
    var mugdialouge=document.getElementById("mugdialouge")
      mug.onclick= function(){
        if (mugdialouge.style.display==="none"){
        document.getElementById("mugdialouge").style.display = "block";
        }
        else{
          document.getElementById("mugdialouge").style.display = "none";
        }
    }
});