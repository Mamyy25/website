
var sesButonu = document.getElementById("sesButonu");


var sesDosyasi = document.getElementById("sesDosyasi");


sesButonu.addEventListener("click", function() {
  
  if (sesDosyasi.paused) {
    
    sesDosyasi.play();
  } else {
    
    sesDosyasi.pause();
  }
});
