document.addEventListener("DOMContentLoaded", function() {
  let sentences = document.querySelectorAll('.sentence');
  let characterCount = 0;

  for (let i = 0; i < sentences.length; i++) {
    let sentence = sentences[i];
    let newContent = '';

    // go through all characters of the sentence
    for (let j = 0; j < sentence.textContent.length; j++) {
      let substring = sentence.textContent.substr(j, 1);
      // if we have a character, wrap it
      if (substring !== " ") {
        newContent += `<span style="--animation-order: ${characterCount};">${substring}</span>`;
      } 
      else {
        newContent += substring;
      }
      characterCount++;
    }
    sentence.innerHTML = newContent;
  }
  // start lyrics
  var lyrics=document.getElementById("marquee");
  var video=document.getElementById("video");
  video.onclick= function(){
     if (lyrics.style.display="none"){
      document.getElementById("marquee").style.display = "block";
      document.getElementById("marquee").style.animationPlayState="running";
      var allspans= document.getElementsByTagName("span")
      for (let k = 0; k < allspans.length; k++) {
        allspans[k].style.animationPlayState="running";
      }
    }
  }
});