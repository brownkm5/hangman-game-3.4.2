(function(){
function generateRandWord(array){
var rand = array[Math.floor(Math.random() * array.length)];
return rand;
}
var filteredWords= commonWords.filter(function(words){
  return words.length>2;
});

// console.log(generateRandWord(filteredWords));

var splitWord = function(){
  var randomWord=generateRandWord(filteredWords);
  var randomWordArray = randomWord.split('');
  // console.log(randomWordArray);
  return randomWordArray;
}
// console.log(splitWord());
var spanGenerator=splitWord();
console.log(spanGenerator);
spanGenerator.forEach(function(letter){
var newSpan = document.createElement('span');
newSpan.className = letter + ' word';
var wordToGuess = document.querySelector('.word-to-guess');
wordToGuess.appendChild(newSpan);
})

}());
