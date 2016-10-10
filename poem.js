
// var colors = require('colors');
//
// function makeRainbows (line){
//   for (var i = 2; i < line.argv.length; i++) {
//
//   console.log(line1.rainbow);
//   console.log(line2.red);
//   console.log(line3.yellow);
//   }
// }
// setInterval(makeRainbows, 1000, line.argv[i]);


// EXERCISE: Write a poem.js that prints your poem in different colors.
// each line should be a different or random color

var colors = require('colors');
var lyrics = ['I can\'t get it', 'The colors',
'is not changing'];

function printRandomline(string) {
  var possibleColors = ['red', 'green', 'blue', 'white', 'cyan', 'blue'];

var randomNumber = Math.floor(Math.random() * 10);

consoe.log(colors[possibleColors[randomNumber]](string));
}

for (var i = 0; i < lyrics.length; i++); {
  printRandomline(lyrics[i]);
}




// var colors = require('colors');
//
// var string = ['I can\'t get it', 'The colors',
// 'is not changing'];
//
// function makeRainbow(string) {
//  for (var i = 0; i < string.length; i++); {
//
//  console.log(colors.white(string[i]));
//  console.log(colors.green(string[i]));
//  console.log(colors.cyan(string[i]));
//  }
//  return makeRainbow;
// }
//
// setInterval(makeRainbow, 300, string);
