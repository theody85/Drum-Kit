var numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++)
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let buttonInnerHTML = this.innerHTML;
        soundHandler(buttonInnerHTML);
    });


function soundHandler (key){

    let audio;

    switch(key){
        case "w":
            audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(key);
    }
}
document.addEventListener("keydown",(event) => soundHandler(event.key));


