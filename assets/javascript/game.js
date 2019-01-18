function generateAlphabet() {
    var arr = [];
    for (var i = 97; i <= 122; i++) {
        arr.push(String.fromCharCode(i));
    }
    return arr;
}

var wins = 0;
var losses = 0;
var guessesAllowed = 9;



var alphabet = generateAlphabet();
var $alreadyGuessed = document.getElementById("already-guessed");
console.log($alreadyGuessed);
var $guessesAllowed = document.getElementById("remaining-guesses");
console.log($guessesAllowed);
var $winsText = document.getElementById("wins-text");
console.log($winsText);
var $lossesText = document.getElementById("losses-text");
console.log($lossesText);


var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];


console.log("Computer Guess:", computerGuess);
var alreadyGuessedArr = [];

document.onkeyup = function (event) {
    var userGuess = event.key;
    alreadyGuessedArr.push(userGuess);

    $alreadyGuessed.textContent = alreadyGuessedArr.join(",   ");

    $winsText.textContent = wins;
    $lossesText.textContent = losses;
    if (alreadyGuessedArr.length <= 9) {
        if (userGuess === computerGuess) {
            wins++;
        

            computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log("Computer Guess:" + computerGuess);
            alreadyGuessedArr = [];
        }
        else {
            guessesAllowed--;
            $guessesAllowed.textContent = guessesAllowed
            console.log("guessesAllowed", guessesAllowed);
            
        }

        if (guessesAllowed === 0) {
            losses++;
            guessesAllowed = 9;
            console.log("Computer Guess:" + computerGuess);
            alreadyGuessedArr = []

        }

    }
    else { alreadyGuessedArr = [] }

}
