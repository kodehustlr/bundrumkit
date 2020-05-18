// Normal function ----------**
// document.querySelector("button").addEventListener("click", handleClick);
//
// function handleClick() {
//   alert("I got clicked!");
// }

// Anonymous function ----------**
// document.querySelector("button").addEventListener("click", function () {
//   alert("I got clicked!");
// });
// ===============================================================**

// DECTECTING BUTTON CLICK => Select all buttons and CLICK FUNCTION ----------**
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    // console.log(this.innerHTML);
    // console.log(buttonInnerHTML);

    // switch (buttonInnerHTML) {
    //   case "w":
    //     var tom1 = new Audio("sounds/tom-1.mp3");
    //     tom1.play();
    //     break;
    //
    //   case "a":
    //     var tom2 = new Audio("sounds/tom-2.mp3");
    //     tom2.play();
    //     break;
    //
    //   case "s":
    //     var tom3 = new Audio("sounds/tom-3.mp3");
    //     tom3.play();
    //     break;
    //
    //   case "d":
    //     var tom4 = new Audio("sounds/tom-4.mp3");
    //     tom4.play();
    //     break;
    //
    //   case "j":
    //     var kick = new Audio("sounds/kick-bass.mp3");
    //     kick.play();
    //     break;
    //
    //   case "k":
    //     var snare = new Audio("sounds/snare.mp3");
    //     snare.play();
    //     break;
    //
    //   case "l":
    //     var crash = new Audio("sounds/crash.mp3");
    //     crash.play();
    //     break;
    //
    //   default: console.log(buttonInnerHTML);
    // }

  });

}
// ===============================================================**

// DECTECTING KEYBOARD PRESS => KEYDOWN FUNCTION ----------**
document.addEventListener("keydown", function(event) {
  // alert("A key was pressed!");
  // console.log(event);
  makeSound(event.key);
});
// ===============================================================**

// MAKESOUND FUNCTION ----------**
function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default: console.log(buttonInnerHTML);
  }

}
