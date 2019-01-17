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
  var ties = 0;