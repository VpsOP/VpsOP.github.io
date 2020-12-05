// Random Number for First dice

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var img1src = "/images/dice" + randomNumber1 + ".png";
var img1 = document.getElementsByClassName("img1")[0];

// Random Number for Second dice

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var img2src = "/images/dice" + randomNumber2 + ".png";
var img2 = document.getElementsByClassName("img2")[0];

// Set Dice image based on the number Generated above

img1.setAttribute("src", img1src);
img2.setAttribute("src", img2src);

// Change title to the winner 🚩
var titleStr = "Refresh Me";

if (randomNumber1 === randomNumber2) {
   titleStr = "🚩 Draw 🚩"; 
} else if(randomNumber1 > randomNumber2) {
    titleStr = "🚩 Player1 Won";
} else {
    titleStr = "Player2 Won 🚩";
}

var title = document.getElementById("title");
title.innerText = titleStr;

console.log(randomNumber1);
console.log(randomNumber2);