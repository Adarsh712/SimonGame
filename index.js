var wrong = new Audio("sounds/wrong.mp3");
var blue = new Audio("sounds/blue.mp3");
var green = new Audio("sounds/green.mp3");
var red = new Audio("sounds/red.mp3");
var yellow = new Audio("sounds/yellow.mp3");
var colorArray = ["blue", "green", "red", "yellow"];
var level = 1;
var answer = [];
pointer = 0;
$("body").on("keydown", function () {
  if (answer.length === 0) {
    $("#level-title").text("Level " + level);
    generateSimon();
    $("body").removeClass("game-over");
  }
});

$(".btn").click(function (event) {
  buttonClicked = event.currentTarget.id;

  buttonPressed(buttonClicked);
  checkAns(buttonClicked);
});

function generateSimon() {
  var n = Math.floor(Math.random() * 4);
  answer.push(colorArray[n]);
  console.log(answer);
  setTimeout(function () {
    $("#" + colorArray[n])
      .hide()
      .fadeIn();
  }, 1000);
}

function buttonPressed(buttonClicked) {
  $("#" + buttonClicked).addClass("pressed");
  setTimeout(function () {
    $("#" + buttonClicked).removeClass("pressed");
  }, 100);
  switch (buttonClicked) {
    case "blue":
      blue.play();
      break;
    case "green":
      green.play();
      break;
    case "red":
      red.play();
      break;
    case "yellow":
      yellow.play();
      break;

    default:
      break;
  }
}
function checkAns(colorPressed) {
  if (colorPressed === answer[pointer]) {
    console.log("OK");
    pointer += 1;
  } else {
    gameOver();
  }
  if (pointer === level) {
    level += 1;
    pointer = 0;
    $("#level-title").text("Level " + level);
    generateSimon();
  }
}

function gameOver() {
  wrong.play();
  $("body").addClass("game-over");
  $("#level-title").text("GAME OVER!! Try Again... ");
  level = 1;
  answer = [];
  pointer = 0;
}
