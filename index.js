var colors = require('colors');

var myString = 'Hello World';

function makeRainbows() {

  console.log(myString);
  console.log(myString.rainbow);
  console.log(myString.red);
  console.log(myString.yellow);
  console.log(myString.blue);
  console.log(myString.green);
  console.log(myString.cyan);
  console.log(myString.magenta);
}

makeRainbows(runInterval, 10000);
