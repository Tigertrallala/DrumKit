var buttons = document.querySelectorAll(".drum");
for (idxBtn = 0; idxBtn < buttons.length; idxBtn++) {
  buttons[idxBtn].addEventListener("click", function () {
    playdedicatedSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  playdedicatedSound(event.key);
  buttonAnimation(event.key);
});

function playdedicatedSound(key) {
  var audioLocPath = "";
  switch (key) {
    case "w":
      var audioLocPath = "./sounds/tom-3.mp3";
      break;
    case "a":
      var audioLocPath = "./sounds/kick-bass.mp3";
      break;
    case "s":
      var audioLocPath = "./sounds/snare.mp3";
      break;
    case "d":
      var audioLocPath = "./sounds/tom-4.mp3";
      break;
    case "j":
      var audioLocPath = "./sounds/tom-1.mp3";
      break;
    case "k":
      var audioLocPath = "./sounds/crash.mp3";
      break;
    case "l":
      var audioLocPath = "./sounds/tom-2.mp3";
      break;
    default:
  }

  if (audioLocPath !== "") {
    var audio = new Audio(audioLocPath);
    audio.play();
  }
}

function buttonAnimation(key) {
  var selectedElement = document.querySelector("." + key);

  selectedElement.classList.add("pressed");
  setTimeout(function () {
    selectedElement.classList.remove("pressed");
  }, 100);
}
