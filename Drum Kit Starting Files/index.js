
var length = document.querySelectorAll("button").length;

document.addEventListener("keydown", function(event){
    var key1 = event.key;
    sunet(key1);
    buttonAnim(key1);
})    

for(var i=0;i<=length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var buttonPress = this.innerHTML;
        sunet(buttonPress);
        buttonAnim(buttonPress);
    });    
}
function sunet(buttonInner){

    //console.log(this.innerHTML);
    switch (buttonInner) {
    case "w":
        var crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;
    case "a":
        var kick = new Audio("./sounds/kick-bass.mp3");
        kick.play();
        break;
    case "s":
        var snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;
    case "d":
        var snare = new Audio("./sounds/tom-1.mp3");
        snare.play();
        break;    
    case "j":
        var snare = new Audio("./sounds/tom-2.mp3");
        snare.play();
        break;  
    case "k":
        var snare = new Audio("./sounds/tom-3.mp3");
        snare.play();
        break;          
    case "l":
        var snare = new Audio("./sounds/tom-4.mp3");
        snare.play();
        break;    
    default: console.log(buttonInner);} 
}


function buttonAnim(thingPress){
    var actButton = document.querySelector("."+thingPress);
    actButton.classList.toggle("pressed");
    setTimeout(function(){
        actButton.classList.toggle("pressed");
    }, 100);
}