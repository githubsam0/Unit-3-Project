let buttonOne = document.querySelector(".button-one");
let buttonTwo = document.querySelector(".button-two");
let buttonThree = document.querySelector(".button-three");

function toggleTextContext() {
    var text = document.getElementById("context");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
 }
 function toggleTextCredits() {
    var text = document.getElementById("credits");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
 }