
window.onload = function () {
    var wordOptions = [
        "psychokinetic",
        "upside down",
        "demogorgon",
        "eleven",
        "hawkins",
        "duffer brothers",
        "hopper",
        "will byers",
    ];

    var selectedWord = "";
    var letters = [];
    var blanks = 0;
    var blanksAndSuccesses = [];
    var wrongLetters = [];
    var winCount = 0;
    var lossCount = 0;
    var guessesRemaining = 10;
    var lettersGuessed = "";
    var started = false;

    function guessedLetterString() {
        var string = "";
        for (var i = 0; i < lettersGuessed.length; i++) {
            var character = lettersGuessed[i].toLowerCase();
            string += character;
            if (i < lettersGuessed.length - 1) {
                string += " ";
            }
        }
        return string.toUpperCase();
    }

    function currentWordString() {
        var string = "";
        for (var i = 0; i < selectedWord.length; i++) {
            var character = selectedWord[i].toLowerCase();
            if (lettersGuessed.indexOf(character) > -1) {
                string += character;
            } else {
                if (character != ' ') {
                    string += "_";
                }
            }
            if (i < selectedWord.length - 1) {
                string += " ";
            }
        }
        return string.toUpperCase();
    }

    function didWin() {
        for (var i = 0; i < selectedWord.length; i++) {
            var character = selectedWord[i];
            if (lettersGuessed.indexOf(character) == -1) {
                return false;
            }
        }
        return true;
    }

    function update() {
        document.getElementById("lettersGuessed").innerHTML = "Letters Guessed: " + guessedLetterString();
        document.getElementById("currentWord").innerHTML = currentWordString();
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesRemaining;
        document.getElementById("winCounter").innerHTML = "Wins: " + winCount;
        document.getElementById("lossCounter").innerHTML = "Losses: " + lossCount;
    }


    document.onkeyup = function (event) {
        if (event.keyCode < 65 || event.keyCode > 90) {
            return // Invalid input
        }

        if (!started) {
            resetGame();
            document.getElementById("DisplayWord").innerHTML = "";
            started = true; //remove press any key to start text
            update();
            return;
        }
        var key = event.key.toLowerCase();

        if (lettersGuessed.indexOf(key) > -1) {
            return; // letter has already been guessed
        }
        lettersGuessed += key;

        if (selectedWord.indexOf(key) == -1) {
            guessesRemaining--;
        }
        if (didWin()) {
            console.log("You won!");
            winCount++;
            resetGame();
        } else if (guessesRemaining == 0) {
            lossCount++;
            resetGame();                         //update loss count
        }
        update();
    }

    function resetGame() {
        lettersGuessed = "";
        guessesRemaining = 10;
        selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    }

}

