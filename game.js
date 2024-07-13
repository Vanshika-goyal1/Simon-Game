var buttonColours = ["red" , "blue" , "green" , "yellow"];

var gamePattern = [];
var userClickedPattern = [];

$(".btn").on ("click", function() {
    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    // console.log(userClickedPattern);
    playSound (userChosenColour);
    animatePress (userChosenColour);
});

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

    //Add the new randomChosenColour generated to the end of the gamePattern.
    gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour ).fadeIn(100).fadeOut(100).fadeIn(100) ;
    playSound(randomChosenColour);
}

function playSound (name) {
    var audio = new Audio ("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    // used Javascript to remove the pressed class after a 100 milliseconds.
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}