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
    console.log(countLetters);
    console.log(values);
}

startGame();



//function playGame() {
  //  values = "";
    //Correct Guess or Incorrect Guess:
    //for (var j = 0; j<lettersInWord; j++) {
      //  alert(lettersInWord[j]);
        //if (guess === lettersInWord[j]) {
          //  values[j] = guess;
            //values.push(guess);
            
        //}

        //document.getElementById("chosenWord").innerHTML= values;
       // output = output+values
       // console.log(values[i]);
        //console.log(values[j]);
        //console.log(lettersInWord[j]);
    //}

    //if (guess ===undefined) {
       // guess.push(incorrectGuesses);
       // guessesRemaining --;
       // document.getElementById("incorrectGuesses").innerHTML = " " + incorrectGuesses;
    //}

    //console.log(guessesRemaining);
    //console.log(incorrectGuesses);

    //Win or Lose:
    //if (values.join("") === chosenWord) {
     //   wins += 1; // add win to scoreboard
     //   reset();
     //   document.getElementById("wins").innerHTML = " " + wins;
    //}

    //Lose: (either here or as an else statement in the win section)
   // if (guessesRemaining = 0) {
     //   loses++; // add lose to scoreboard
    //    document.getElementById("chosenWord").innerHTML = " " + values.join(" ");
    //    reset();
   // }


//}



//function reset() {
 //   guessesRemaining = 12;
  //  incorrectGuesses = [];
  //  values = [];
   // startGame();
   // playGame();
//}


//document.onkeyup = function (event) {
// guess = String.fromCharCode(event.keyCode).toLowerCase();
//  console.log(guess);

//}
//playGame();
//document.onkeyup = function (event) {
  //  guess = String.fromCharCode(event.keyCode).toLowerCase();
    //console.log(guess);
    //console.log(guessesRemaining)
//}

