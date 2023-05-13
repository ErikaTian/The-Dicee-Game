var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "./images/" + randomDiceImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);
// Above code is a bit too long, but you can see this process clearly!
// Aim at a healthy balance between long code and short code!

// Below is my own solution:
// document.querySelector(".img1").setAttribute("src", randomImageSource1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "./images/" + randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
// Below is my own solution:
// document.querySelector(".img2").setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = "🎉 Stanley Wins!";
} else if (randomNumber1 < randomNumber2) {
	document.querySelector("h1").innerHTML = "🎈 Erika Wins!";
} else { 
	document.querySelector("h1").innerHTML = "Draw!";
}