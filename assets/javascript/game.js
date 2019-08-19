
//Variable Declarations//
var random = ["salt", "match", "sad", "materialistic", "planes", "thread", "industry", "discovery", "tiny", "wicked", "banana"];
var word = " ";
var letters = [];
var wordlength = [];

var wrongguess = [];

var win = 0;
var lose = 0;
var remainingguesses = 15;


function startgame() {
    //generate random word from array//
    word = [Math.floor(Math.random() * words.length)];

    //split letters of word//
    letters = word.split("");

    //store each letter as "_"
    for (var i = 0; i < blanks; i++) {
        letters.push("_");
    } 
    
    // generate "_" for each letter
    for (var i=0; i<letters; i++) {
    }

    //display "_" in HTML//
    document.getElementById("word").innerHTML = " " + letters.join(" ");
}