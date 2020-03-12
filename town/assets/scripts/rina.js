document.addEventListener("DOMContentLoaded", function() {
    var rinaperson=document.getElementById("rinaperson");
    var rinadialouge=document.getElementById("rinadialouge")
      rinaperson.onclick= function(){
        if (rinadialouge.style.display==="none"){
        document.getElementById("rinadialouge").style.display = "block";
        }
        else{
          document.getElementById("rinadialouge").style.display = "none";
        }
    }
    var fishtank=document.getElementById("fishtank");
    var fishtankdialouge=document.getElementById("fishtankdialouge")
      fishtank.onclick= function(){
        if (fishtankdialouge.style.display==="none"){
        document.getElementById("fishtankdialouge").style.display = "block";
        }
        else{
          document.getElementById("fishtankdialouge").style.display = "none";
        }
    }
});