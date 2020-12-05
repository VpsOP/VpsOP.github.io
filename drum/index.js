var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var snare = new Audio("sounds/snare.mp3");
var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kick-bass.mp3");

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
      playSound(this.innerText.toLowerCase());
      buttonAnimation(this.innerText.toLowerCase());
  });
});

document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

function playSound(key) {
    switch (key) {
      case "w":
        tom1.play();
        break;

      case "a":
        tom2.play();
        break;

      case "s":
        tom3.play();
        break;

      case "d":
        tom4.play();
        break;

      case "j":
        snare.play();
        break;

      case "k":
        crash.play();
        break;

      case "l":
        kick.play();
        break;

      default:
        break;
    }
}

function buttonAnimation(key) {
  var pressedKey = document.querySelector("." + key);
  pressedKey.classList.add("pressed");
  setTimeout( function () {
    pressedKey.classList.remove("pressed");
  }, 100);
}
