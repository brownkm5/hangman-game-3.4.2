(function(){
$(function(){


  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'];
var hangmanForm = $('.hangman');



function generateRandWord(commonWords){
var rand = commonWords[Math.floor(Math.random() * commonWords.length)];
return rand;
}

var filteredWords= commonWords.filter(function(words){
  return words.length>2;
});


var currentNumberOfGuesses = document.getElementById('number-of-guesses');
var numberOfGuesses= 8;

document.getElementById("guess").addEventListener("click", letterInputFunction);

function letterInputFunction () {
  var answerDisplayDiv = document.getElementById("display-answer");
  var $letterInput = $('#letter'),
      guess = $letterInput.val();

  numberOfGuesses = numberOfGuesses - 1;
  currentNumberOfGuesses.textContent = numberOfGuesses;

  if (numberOfGuesses === 0) {
    $('#guess').hide();
    return;
  }

  $letterInput.val('');

  $(answerDisplayDiv).append(guess);

  for (var i = 0; i < wordToGuess.length; i++) {
    if (wordToGuess[i] == guess) {
      $('.' + guess).html(guess);
      var guesses = [];
      guesses.add(guess);
      console.log(guesses);
  }
}

var splitWord = function(){
  var randomWord=generateRandWord(filteredWords);
  var randomWordArray = randomWord.split('');
  return randomWordArray;
  console.log(randomWordArray);
}

var wordToGuess=splitWord();
console.log('span', wordToGuess);

wordToGuess.forEach(function(letter){
var newSpan = document.createElement('p');
newSpan.className = letter;
var word = document.querySelector('.guess');
word.appendChild(newSpan);


})



});
}());
