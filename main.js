/*
    Developped by Aleorium 
    A simple script for hack the chrome dino game
    Copy and paste into the console  on the chrome://dino
    Enjoy !
    Star the repository please 
*/
let signe = prompt("Puts the speed that you would like");
alert("Well done, you hack chrome dino game");
var original = Runner.prototype.gameOver;
Runner.prototype.gameOver = function (){};
Runner.instance_.setSpeed(signe);
