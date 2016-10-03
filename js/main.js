(function(){

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'];

function generateRandWord(commonWords){
var rand = commonWords[Math.floor(Math.random() * commonWords.length)];
return rand;
}

var filteredWords= commonWords.filter(function(words){
  return words.length>2;
});

// var buttons = function(){
//   var myButtons = document.createElement('div');
//   myButtons.id = 'letters'
//   var letters = document.createElement('ul');
//   myButtons.appendChild(letters); //puts the ul in the div
//
//   for (var i = 0; i < alphabet.length; i++) {
//     letters.id = 'alphabet';
//     var list = document.createElement('button');
//
//     list.textContent = alphabet[i];
//     letters.appendChild(list); //puts the letters in the ul
//     var currentDiv = document.querySelector('.div-one');
//     document.body.insertBefore(myButtons, currentDiv);
//   }
// }
// buttons();
// var letterInput = document.getElementsByName('letter')[0].value

document.getElementById("guess").addEventListener("click", letterInputFunction);
function letterInputFunction () {
//   var numberOfGuesses = document.querySelector("number-of-guesses");
//   numberOfGuesses=numberOfGuesses-1;
// console.log(numberOfGuesses);
    var letterInput = [];
    letterInput.push(document.getElementsByName('letter')[0].value);
    var answerDisplayDiv = document.getElementById("display-answer");
    if (splitWord.includes(letterInput)) {
          var answerContent = ("The word contains: " + letterInputFunction);
          answerDisplayDiv.appendChild(answerContent);
          document.body.insertAfter(answerContent, answerDisplayDiv);
      }
      else {
        var answerContent = ("The word does not contains: " + letterInputFunction);
        answerDisplayDiv.appendChild(answerContent);
        document.body.insertAfter(answerContent, answerDisplayDiv);
      }
    }


var splitWord = function(){
  var randomWord=generateRandWord(filteredWords);
  var randomWordArray = randomWord.split('');
  return randomWordArray;
}

var spanGenerator=splitWord();
console.log(spanGenerator);

spanGenerator.forEach(function(letter){
var newSpan = document.createElement('span');
newSpan.className = letter;
var wordToGuess = document.querySelector('.word-to-guess');
wordToGuess.appendChild(newSpan);
})

}());
