var chalk = require('chalk');


var lyrics = [
  'I am he as you are he as you are me and we are all together.',
  'See how they run like pigs from a gun, see how they fly.',
  'I\'m crying.',
  '',
  'Sitting on a cornflake, waiting for the van to come.',
  'Corporation tee-shirt, stupid bloody Tuesday.',
  'Man, you been a naughty boy, you let your face grow long.',
  'I am the egg man, they are the egg men.',
  'I am the walrus, coo coo cachoo',
  '',
  'Mister City Policeman sitting',
  'Pretty little policemen in a row.',
  'See how they fly like Lucy in the Sky, see how they run.',
  'I\'m crying, I\'m crying.',
  'I\'m crying, I\'m crying.',
  '',
  'Yellow matter custard, dripping from a dead dog\'s eye.',
  'Crabalocker fishwife, pornographic priestess,',
  'Boy, you been a naughty girl you let your knickers down.',
  'I am the eggman, they are the eggmen.',
  'I am the walrus, coo coo cachoo',
  '',
  'Sitting in an English garden waiting for the sun.',
  'If the sun don\'t come, you get a tan',
  'From standing in the English rain.',
  'I am the egg man, they are the egg men',
  'I am the walrus, coo coo cachoo ca coo coo cachoo',
  '',
  'Expert text pert choking smokers,',
  'Don\'t you think the joker laughs at you?',
  'See how they smile like pigs in a sty,',
  'See how they snide.',
  'I\'m crying.',
  '',
  'Semolina pilchard, climbing up the Eiffel Tower.',
  'Elementary penguin singing Hari Krishna.',
  'Man, you should have seen them kicking Edgar Allan Poe.',
  'I am the egg man, they are the egg men.',
  'I am the walrus, coo coo cachoo ca coo coo cachoo. Coo coo cachou ca coo.'
];

function printRandomColor(string) {
  var randomNumber = Math.floor(Math.random() * 10), // this will get a number from 0 to 10 , NOT A DECIMAL
      possibleColors = [
        'red', 'green', 'blue', 'white', 'cyan', 'magenta', 'red', 'green', 'blue', 'red'
      ];

  console.log(chalk[possibleColors[randomNumber]](string));
  // dynamic version of: console.log(colors.red(string))
}


for (var i = 0; i < lyrics.length; i++) {
  printRandomColor(lyrics[i]);
}
