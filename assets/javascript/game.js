
window.onload = function() {
var wordOptions = [
"psychokinetic",
"Upside Down",
"Demogorgon",
"Eleven",
"Hawkins",
"Duffer Brothers",
"Hopper",
"Will Byers",
];

var selectedWord = "";
var letters = [];
var blanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];
var winCount = 0;
var lossCount = 0;
var guessesRemaining = 10;


function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    letters = selectedWord.split("");
    blanks = letters.length;

    guessesRemaining = 10;
    wrongLetters = [];
    blanksAndSuccesses = [];

    for (var i = 0; i < blanks; i++) {
        blanksAndSuccesses.push("_");
    }

    document.getElementById("currentWord").innerHTML = blanksAndSuccesses.join("   ");
    document.getElementById("guessesLeft").innerHTML = guessesRemaining;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;
}

console.log(winCounter);
function checkLetters (letters) {
    alert(letters);
var letterInWord = false;
for (var i = 0; i < blanks.length; i++) {
    if(selectedWord[i] == letters) {
        letterInWord = true;
    }
}
}

startGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    console.log(letterGuessed);
}

}
