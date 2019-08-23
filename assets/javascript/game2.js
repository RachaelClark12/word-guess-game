Variables:
chosenWord = "";  //word randomly chosen from catWords array
lettersInWord = []; //chosenWord split into letter array
incorrectGuesses = [];
countLetters = 0;  //length of chosenWord
values = [];  //"_" for each letter
wins = 0;
losses = 0;
guessesRemaining = 12;
isDisplayingCorrectAnswer = false


function startGame() {
    catWords = ["claw", "hairball", "groom", "kitten", "scratch", "tabby", "tomcat", "pounce", "meow", "feline", "calico"];
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

    updateScreen();

    conosleLog();

}

function updateScreen() {
    document.getElementById("chosenWord").innerHTML = " " + values.join(" ");
    document.getElementById("guessesRemaining").innerHTML = " " + guessesRemaining;
    document.getElementById("incorrectGuesses").innerHTML = " " + incorrectGuesses;
    document.getElementById("wins").innerHTML = " " + wins;
    document.getElementById("losses").innerHTML = " " + losses;
    document.getElementById("chosenWord").style.color = "black";
}

function conosleLog() {
    console.log(guessesRemaining);
    console.log(chosenWord);
    console.log(lettersInWord);
    console.log(values);
}

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
    updateScreen();
    conosleLog();
}

function resetGame() {
    guessesRemaining = 12;
    incorrectGuesses = [];
    values = [];
    updateScreen();
    startGame();
}

function checkIfGameIsComplete() {
    if (lettersInWord.toString() === values.toString()) {
        isDisplayingCorrectAnswer = true
        wins++;
        document.getElementById("wins").innerHTML = " " + wins;
        document.getElementById("chosenWord").style.color = "green"

        setTimeout(function () {
            isDisplayingCorrectAnswer = false
            resetGame()
        }, 1500);

    }
    else if (guessesRemaining === 0) {
        document.getElementById("chosenWord").innerHTML = "" + lettersInWord.join(" ");
        document.getElementById("chosenWord").style.color = "red"
        isDisplayingCorrectAnswer = true;
        losses++;
        setTimeout(function () {
            isDisplayingCorrectAnswer = false
            resetGame()
        }, 1500);

        //document.getElementById("losses").innerHTML = " " + losses;
    }
}

startGame()
document.onkeyup = function (event) {
    var guess;
    function isLetter(ch) {
        return /^[A-Z]$/i.test(ch);
    }
    if (isLetter(event.key) && !isDisplayingCorrectAnswer) {
        guess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(guess);
        playGame(guess);
        checkIfGameIsComplete();
    }

}