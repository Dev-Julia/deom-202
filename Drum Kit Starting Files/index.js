//Detects button clicks
var numberofDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberofDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

    function handleClick() {
        
        //this.style.color = "white"; This code is used to change the color of each clicked letter to white
        // the keyword "this" is used to identify the element that triggered the action.
        // Next we are going to use the switch case statement in place of the if statement to present the scenario where--- 
        // the drums clicked gives the corresponding sound.

        var buttonInnerHTML = this.innerHTML; // this is to declare the variable to be used for the switch case.

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    }
}

    //Detects keyboard press
    document.addEventListener("keypress", function(event) {
        makeSound(event.key);

        buttonAnimation(event.key);
    })   

    function makeSound(key){
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
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "k":
                var kickBass = new Audio("sounds/kick-bass.mp3");
                kickBass.play();
                break; 
                
            case "l":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break; 

            default: console.log(buttonInnerHTML);
                break;
        }
    }

    //To add animation 
    function buttonAnimation(currentKey) {
        var activeButton = document.querySelector("." + currentKey);
        
        activeButton.classList.add("pressed"); //this links the css style to each drum clicked or pressed

        //to make it return back to its default setting
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }