
function sayThatWasEasy() {
  var thatWasEasy = new Audio("that_was_easy.mp3");
  thatWasEasy.play();
}

/*global $*/

$("#easy").on("click", sayThatWasEasy);

function sayBush() {
  var bush = new Audio("Bush Fool Me Once....mp3");
  bush.play();
}


$("#bush").on("click", sayBush)

$(document).keypress(delegateKeypress);

function delegateKeypress(event) {
    if (event.keyCode == 32) {
        $("#easy").trigger("click");
    }
}