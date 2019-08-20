Variables:
catWords = ["claw", "hairball", "groom", "kitten", "scratch", "tabby", "tomcat", "pounce", "meow", "feline", "calico"];
chosenWord = catWords[Math.floor(Math.random() * catWords.length)]; //letter randomly chosen from catWords array
lettersInWord = chosenWord.toString().split(""); //chosenWord split into letter array
incorrectGuesses = [];
countLetters = lettersInWord.length;  //length of chosenWord
values = [];  //"_" for each letter
wins = 0;
losses = 0;
guessesRemaining = 12;
guess = ""; //userinput


function startGame() {

    //Generate "_”  for each letter in the word
    for (var i = 0; i < chosenWord.length; i++) {
        display[i] = "_";
        output = output + display[i]
    }
}

//5. Display “_” on screen for each letter in the word
//document.getElementById("chosenWord").innerHTML = " " + values.join(" ");

//5. Display Remaining Guesses on screen
//document.getElementById("guessesRemaining").innerHTML = " " + guessesRemaining;

//6. Display Wins and Losses on screen
//document.getElementById("wins").innerHTML = " " + wins;
//document.getElementById("losses").innerHTML = " " + losses;

console.log(guessesRemaining);
console.log(chosenWord);
console.log(lettersInWord);
console.log(countLetters);
console.log(values);
//}

//document.getElementById("guessesRemaining").innerHTML = " " + guessesRemaining;

//startGame();




//function playGame() {
    //Correct Guess or Incorrect Guess:
  //  for (var i = 0; i < lettersInWord; i++) {
    //    if (lettersInWord[i] === guess) {
      //      values[index] = guess;
        //    guess.push(value)
        //}
        //console.log(values[i]);
   // }

  //  if (guess ===undefined) {
//        guess.push(incorrectGuesses);
//        guessesRemaining --;
//        document.getElementById("incorrectGuesses").innerHTML = " " + incorrectGuesses;
//    }

 //   console.log(guessesRemaining);
 //   console.log(incorrectGuesses);

  //  //Win or Lose:
  //  if (values.join("") === chosenWord) {
  //      wins += 1; // add win to scoreboard
  //      reset();
  //      document.getElementById("wins").innerHTML = " " + wins;
  ////  }

    //Lose: (either here or as an else statement in the win section)
   // if (guessesRemaining = 0) {
     //   loses++; // add lose to scoreboard
    //    document.getElementById("chosenWord").innerHTML = " " + values.join(" ");
    //    reset();
   // }


//}



//function reset() {
    //guessesRemaining = 12;
   // incorrectGuesses = [];
  //  values = [];
  //  startGame();
  //  playGame();
//}


//document.onkeyup = function (event) {
// guess = String.fromCharCode(event.keyCode).toLowerCase();
//  console.log(guess);

//}
////playGame();
//document.onkeyup = function (event) {
  //  guess = String.fromCharCode(event.keyCode).toLowerCase();
   // console.log(guess);
   ///console.log(guessesRemaining)
//}

