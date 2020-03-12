document.addEventListener("DOMContentLoaded", function() {
    var lamppost=document.getElementById("lamppost");
    var lamppostdialouge=document.getElementById("lamppostdialouge")
      lamppost.onclick= function(){
        if (lamppostdialouge.style.display==="none"){
        document.getElementById("lamppostdialouge").style.display = "block";
        }
        else{
          document.getElementById("lamppostdialouge").style.display = "none";
        }
    }
});