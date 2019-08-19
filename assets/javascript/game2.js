Variables:
catWords = ["claw", "hairball", "groom", "kitten", "scratch", "tabby", "tomcat", "pounce", "meow", "feline", "calico"];
chosenWord = "";
lettersInWord = [];
incorrectGuesses = [];
letters = [];
values = [];
hidden = [];
guess = "";
wins = 0;
losses = 0;
guessesRemaining = 12;


function startGame() {
    //1.	Computer selects random word from array
    chosenWord = catWords[Math.floor(Math.random() * catWords.length)];
    

    //2.	Separate letters of the word into an array
    lettersInWord = chosenWord.toString().split("");
    

    //Length of lettersinWord array
    letters = lettersInWord.length;

    //3.	Generate "_”  for each letter in the word
    for (var i=0; i<letters; i++) {
        values.push("_");
    }


   // letterCount = chosenWord.length;
   // answer = new Array(letterCount).fill("_");
    //console.log(answer);
    //console.log(letterCount);
    //4.	Display “_” on screen for each letter in the word
    document.getElementById("chosenWord").innerHTML = " " + values.join(" ");


    console.log(chosenWord);
    console.log(lettersInWord);
    console.log(letters);
    console.log(values);
}

startGame();