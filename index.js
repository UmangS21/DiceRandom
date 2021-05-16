var randomvariable = Math.floor((Math.random() * 6) + 1);

var randomdiceImage = "dice" + randomvariable + ".png";

var Image1 = document.querySelectorAll("img")[0];

Image1.setAttribute("src", randomdiceImage);


var randomvariable2 = Math.floor((Math.random() * 6) + 1);

var randomdiceImage2 = "dice" + randomvariable2 + ".png";

var Image2 = document.querySelectorAll("img")[1];

Image2.setAttribute("src", randomdiceImage2);


if (randomvariable > randomvariable2) {
    document.querySelector("h1").innerHTML = "🚩🚩Player1 Wins!";
} else if (randomvariable2 > randomvariable) {
    document.querySelector("h1").innerHTML = "🚩🚩Player2 Wins!";

} else {
    document.querySelector("h1").innerHTML = "GAME DRAW🏴‍☠️";
}