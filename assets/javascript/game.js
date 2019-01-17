function generateAlphabet(){
    var arr = [];
    for(var i = 97; i <= 122; i++){
      arr.push(String.fromCharCode(i));
    }
    return arr;
  }
  
  var alphabet = generateAlphabet();
  var $alreadyGuessed = document.getElementById("already-guessed");
  console.log($alreadyGuessed);
  var guessesAllowed= document.getElementById("remaining-guesses");
  console.log(guessesAllowed);
  
  var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  
  
  console.log("Computer Guess:", computerGuess);
  var alreadyGuessedArr = [];
  
  document.onkeyup = function(event) {
    var userGuess = event.key;
    alreadyGuessedArr.push(userGuess);
    
  
    $alreadyGuessed.textContent = alreadyGuessedArr.join(",   ");
  }


  var wins = 0;
  var losses = 0;
  var guessesAllowed = 9;


    if (userGuess === computerGuess) {
    wins++;
}
    if (userGuess !== computerGuess) {
    losses++;
}
    if (userGuess) {
    guessesAllowed--;
}1