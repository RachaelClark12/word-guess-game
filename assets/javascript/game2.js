Variables:
catWords = ["claw", "hairball", "groom", "kitten", "scratch", "tabby", "tomcat", "pounce", "meow", "feline", "calico"];
chosenWord = "";  //word randomly chosen from catWords array
lettersInWord = []; //chosenWord split into letter array
incorrectGuesses = [];
countLetters = 0;  //length of chosenWord
values = [];  //"_" for each letter
wins = 0;
losses = 0;
guessesRemaining = 12;
guess = ""; //userinput
isDisplayingCorrectAnswer = false

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

///////////////////////////////////////////////////////////////////////////
//make sure user guess is a letter! 
function isLetter(ch) {
    return /^[A-Z]$/i.test(ch);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
function playGame(letter) {
    var wasAnIncorrectGuess = true
    for (var j = 0; j < lettersInWord.length; j++) {
        if (lettersInWord[j] === letter) {
            values[j] = letter;
            wasAnIncorrectGuess = false
        }
    }
    if (wasAnIncorrectGuess && !incorrectGuesses.includes(letter)) {
        incorrectGuesses.push(letter);
    guessesRemaining--;
    }
}


console.log(values);
console.log(incorrectGuesses);
console.log(guessesRemaining);



/////////////////////////////////////////////////////////////////////////////////////////////////////
function resetGame() {
   // guessesRemaining = 12;
    //incorrectGuesses.length = 0;
    values = [];
    console.log(values);
    startGame();
    playGame();
    guessesRemaining = 12;
    incorrectGuesses = [];
    document.getElementById("chosenWord").style.color = "black"
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
function completeGame() {
    if (lettersInWord.toString() === values.toString()) {
        wins++;
        document.getElementById("wins").innerHTML = " " + wins;
        document.getElementById("chosenWord").style.color = "green"
        isDisplayingCorrectAnswer = true
        setTimeout(function() {
            isDisplayingCorrectAnswer = false
            resetGame()
        }, 1500);
    }
    else if (guessesRemaining ===0) {
        //alert("Better luck next time!")
        document.getElementById("chosenWord").innerHTML = "" + chosenWord;// trying to display word after losing
        document.getElementById("chosenWord").style.color = "green" //trying to display word after losing in green
        losses++;   
        document.getElementById("losses").innerHTML = " " + losses;
        resetGame();
        updateScreen();
        console.log(guessesRemaining);
        console.log(incorrectGuesses);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
startGame()

document.onkeyup = function (event) {

    if (isLetter(event.key) && !isDisplayingCorrectAnswer) {
    guess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(guess);
    playGame(guess);
    updateScreen();
    completeGame();
    }
}

function updateScreen() {
    document.getElementById("guessesRemaining").innerHTML = " " + guessesRemaining;
    document.getElementById("incorrectGuesses").innerHTML = " " + incorrectGuesses;
    document.getElementById("chosenWord").innerHTML = " " + values.join(" ");
}



//issues:
//display full word if lose in red!
