// Iteration 8: Making scoreboard functional

let gameScore=localStorage.getItem("gameScore");
let scoreBoard=document.getElementById("score-board");
scoreBoard.innerText=gameScore;

let playAgainBtn = document.getElementById("play-again-button");
playAgainBtn.addEventListener("click", function(){
    window.location.href="./game.html"
})