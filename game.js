var buttonColours = ["red" , "blue" , "green" , "yellow"];

var gamePattern = [];
var userClickedPattern = [];

$(".btn").on ("click", function() {
    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    console.log(userClickedPattern);
});

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

    //Add the new randomChosenColour generated to the end of the gamePattern.
    gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour ).fadeIn(100).fadeOut(100).fadeIn(100) ;
    var audio = new Audio ("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}
