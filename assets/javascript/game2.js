Variables:
catWords = ["claw", "hairball", "groom", "kitten", "scratch", "tabby", "tomcat", "pounce", "meow", "feline", "calico"];
chosenWord = "";  //letter randomly chosen from catWords array
lettersInWord = []; //chosenWord split into letter array
incorrectGuesses = [];
countLetters = 0;  //length of chosenWord
values = [];  //"_" for each letter
wins = 0;
losses = 0;
guessesRemaining = 12;
guess = ""; //userinput

/////////////////////////////////////////////////////////////////////////////////////////////////////
function startGame() {
  //1. Computer selects random word from array
  chosenWord = catWords[Math.floor(Math.random() * catWords.length)];


  //2. Separate letters of the word into an array
  lettersInWord = chosenWord.toString().split("");


  //3. Get length of lettersinWord array
  countLetters = lettersInWord.length;

  //4. Generate "_”  for each letter in the word
  for (var i = 0; i < countLetters; i++) {
    values.push("_");
  }

  //5. Display “_” on screen for each letter in the word
  document.getElementById("chosenWord").innerHTML = " " + values.join(" ");
  document.getElementById("guessesRemaining").innerHTML = " " + guessesRemaining;
  document.getElementById("wins").innerHTML = " " + wins;
  document.getElementById("losses").innerHTML = " " + losses;

  //6. Console Log
  console.log(guessesRemaining);
  console.log(chosenWord);
  console.log(lettersInWord);
  console.log(values);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
function playGame(letter) {

  for (var j = 0; j < lettersInWord.length; j++) {
    if (lettersInWord[j] === letter) {
      values[j] = letter;
    }
    //else {
     // console.log(guessesRemaining);
     // guessesRemaining-=1;
     // incorrectGuesses.push(letter);
      //console.log(incorrectGuesses);
   // }
  }
  
}


console.log(values);
console.log(incorrectGuesses);
console.log(guessesRemaining);

/////////////////////////////////////////////////////////////////////////////////////////////////////
function resetGame() {
  guessesRemaining = 12;
  incorrectGuesses = [];
  values = [];
  startGame();
  playGame();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
function completeGame() {
  if (lettersInWord.toString() === values.toString()) {
    wins++;
    resetGame();
    document.getElementById("wins").innerHTML = " " + wins;
  }

  else if (guessesRemaining === 0) {
    losses++;
    reset();
    document.getElementById("losses").innerHTML = " " + losses;
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
startGame()

document.onkeyup = function (event) {
  guess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(guess);
  playGame(guess);
  completeGame();
  document.getElementById("guessesRemaining").innerHTML = " " + guessesRemaining;
  document.getElementById("incorrectGuesses").innerHTML = " " + incorrectGuesses;
  document.getElementById("chosenWord").innerHTML = " " + values.join(" ");
}



//questions:
//how to code for incorrect guess??;
//how to let full word display before resetting when completeGame();
