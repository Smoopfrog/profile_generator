const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Set questions
let questions = [  
  '1. What\'s your name? Nicknames are also acceptable: ',
  '2. What\'s an activity you like doing? ',
  '3. What do you listen to while doing that? ',
  '4. Which meal is your favourite? (eg: dinner, brunch, etc.) ',
  '5. What\'s your favourite thing to eat for that meal? ',
  '6. Which sport is your absolute favourite? ',
  '7. What is your superpower? In a few words, tell us what you are amazing at! '
];

// Initialize answers array
let answers = [];

const question = array => {
  // Find the array length
  let arrLength = array.length;

  // Check if the array is empty
  if (arrLength === 0) {
    rl.close();
    console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`);
  } else {

    rl.question(array[0], (answer) =>{
      //Store answer in answers array
      answers.push(answer);

      // Use recursion to go through the array again while removing the first question
      question(array.slice(1));
    })
  }
};

question(questions);