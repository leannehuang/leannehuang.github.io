document.addEventListener("DOMContentLoaded", function() {
  var sort=document.getElementById("sortbutton");
  var transportation=document.getElementsByClassName("transportation");
  var places=document.getElementsByClassName("places");
  var events=document.getElementsByClassName("events");
  var item1=document.getElementById("item1")
  var item2=document.getElementById("item2")
  var item3=document.getElementById("item3")

  sort.onclick= function(){
    if (document.getElementById("sortmenu").style.display=== "none"){
      document.getElementById("sortmenu").style.display = "block";
    }
    else
      document.getElementById("sortmenu").style.display = "none";
}
item1.onclick= function(){
    if (document.body.classList.contains("all")){
      for(var i = 0; i < places.length; i++){
        places[i].style.display = "none";
      }
      for(var i = 0; i < events.length; i++){
        events[i].style.display = "none";
      }
      for(var i = 0; i < transportation.length; i++){
        transportation[i].style.display = "block";
      }
    }
}
  item2.onclick= function(){
    if (document.body.classList.contains("all")){
      for(var i = 0; i < transportation.length; i++){
        transportation[i].style.display = "none";
      }
      for(var i = 0; i < events.length; i++){
        events[i].style.display = "none";
      }
      for(var i = 0; i < places.length; i++){
        places[i].style.display = "block";
      }
    }
  item3.onclick= function(){
    if (document.body.classList.contains("all")){
      for(var i = 0; i < transportation.length; i++){
        transportation[i].style.display = "none";
      }
      for(var i = 0; i < places.length; i++){
        places[i].style.display = "none";
      }
      for(var i = 0; i < events.length; i++){
        events[i].style.display = "block";
      }
    }
  }
  item4.onclick= function(){
    if (document.body.classList.contains("all")){
      for(var i = 0; i < transportation.length; i++){
        transportation[i].style.display = "block";
      }
      for(var i = 0; i < places.length; i++){
        places[i].style.display = "block";
      }
      for(var i = 0; i < events.length; i++){
        events[i].style.display = "block";
      }
    }
  }
}
});