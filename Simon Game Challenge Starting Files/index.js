buttonColours = ["red", "green", "blue", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var isStart = false;



$(".btn").click(function(e){
   var userChosenColour = e.currentTarget.id;
   userClickedPattern.push(userChosenColour);
   soundPlay(userChosenColour);
   animatePress(userChosenColour);
   
   checkAns(userClickedPattern.length-1);
})

$("body").keydown(function(e){
    var keyPressed = e.key;
    if (keyPressed === "a" && isStart === false ) {
        nextSequ();
    }
})

function gameOver(){
     gamePattern = [];
    userClickedPattern = [];
    level = 0;
    isStart = false;
}

function checkAns(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
    
    if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function () {
            nextSequ();
          }, 1000);
        }
    } else {
     console.log("wrong");   

     var audio = new Audio("./sounds/wrong.mp3");
    audio.play();
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      $("#level-title").text("Game Over, Press A Key to Restart");
      gameOver()

    }
}



function animatePress(currentCollor){
    switch (currentCollor) {
        case "red":
            $("#red").addClass("pressed").delay(100).queue(function(next){
                $(this).removeClass("pressed");
                next();
            });
            break;
        case "blue":
            $("#blue").addClass("pressed").delay(100).queue(function(next){
                $(this).removeClass("pressed");
                next();
            });
            break;
        case "green":
            $("#green").addClass("pressed").delay(100).queue(function(next){
                $(this).removeClass("pressed");
                next();
            });
            break;
        case "yellow":
            $("#yellow").addClass("pressed").delay(100).queue(function(next){
                $(this).removeClass("pressed");
                next();
            });
            break;        

    default:console.log(randomChosenColour);
        break;
}
    
}



function nextSequ() {
    userClickedPattern = [];
    
    isStart = true;
    $("h1").text("Level "+ level);
    level++;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    soundPlay(randomChosenColour);

}



function soundPlay(color){
switch (color) {
            case "red":
                $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                var audio = new Audio("./sounds/red.mp3");
                audio.play();
                break;
            case "blue":
                $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                var audio = new Audio("./sounds/blue.mp3");
                audio.play();
                break;
            case "green":
                $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                var audio = new Audio("./sounds/green.mp3");
                audio.play();
                break;
            case "yellow":
                $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                var audio = new Audio("./sounds/yellow.mp3");
                audio.play();
                break;        
    
        default:console.log(randomChosenColour);
            break;
    }
}
