
var randomNumber1 = Math.floor(Math.random() * 6) +1; //create numbers 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //creates dice1.png-dice6.png
var randomImageSource = "images/" + randomDiceImage; //creates images/dice1.png-images/dice6.png
var image1 = document.querySelectorAll("img")[0]; //selects the first HTML img attribute
image1.setAttribute("src", randomImageSource); //sets the image to whatever random number image it produces

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎉🎉🎉 Yay, Player 1 is the Winner!!!!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🎉🎉🎉 Hooray, Player 2 is the Winner!!!!";
}
else{
    document.querySelector("h1").innerHTML = "😒😒😒 Try again, there is no winner for this round";
}
