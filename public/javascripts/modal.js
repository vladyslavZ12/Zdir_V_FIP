// Get the modal
var modal = document.getElementById("fortnite-modal");
var modalSport = document.getElementById("sport-modal");
var modalVodka = document.getElementById("vodka-modal");
var modalDisney = document.getElementById("disney-modal");

// Get the button that opens the modal
var btn = document.getElementById("button-fortnite");
var btnSport = document.getElementById("button-sport");
var btnVodka = document.getElementById("button-vodka");
var btnDisney = document.getElementById("button-disney");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

btnSport.onclick = function() {
  modalSport.style.display = "block";
}

btnVodka.onclick = function() {
  modalVodka.style.display = "block";
}

btnDisney.onclick = function() {
  modalDisney.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

span1.onclick = function() {
  modalSport.style.display = "none";
}

span2.onclick = function() {
  modalVodka.style.display = "none";
}

span3.onclick = function() {
  modalDisney.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modalSport) {
    modalSport.style.display = "none";
  }
  if (event.target == modalVodka) {
    modalVodka.style.display = "none";
  }
  if (event.target == modalDisney) {
    modalDisney.style.display = "none";
  }
}