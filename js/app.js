'use strict';
console.log('Hello from the js file');

//global variable
let userPoints = 0;


// prompt user for input
let userName = prompt('What is your name?');
console.log('userName is: ', userName);


while(!userName){
  userName = prompt('Please enter your name');
  if(userName){
    alert('Your name is ' + userName);
  }
}

// userName.toLowerCase
// validate input with conditional logic
let lowerCaseName = userName.toLowerCase();
console.log(lowerCaseName);


let answer1;
answer1 = prompt('Did Leah study history?');
if(answer1 === 'no' || answer1 === 'n' ){
  alert('That\'s right! Leah studied business.');
  userPoints++;
} else {
  alert('Incorrect. Leah studied business');
}


let answer2;
answer2 = prompt('Does Leah live in Iowa?');
if(answer2 === 'yes' || answer2 === 'y' ){
  alert('That\'s right! Leah lives in Iowa');
  userPoints++;
} else {
  alert('Incorrect. Leah lives in Iowa');
}

let answer3;
answer3 = prompt('Does Leah have a dog');
if(answer3 === 'no' || answer3 === 'n' ){
  alert('That\'s right! Leah has a cat, not a dog.');
  userPoints++;
} else {
  alert('False. Leah has a cat!');
}

let answer4;
answer4 = prompt('Is Leah\'s favorite ice cream vanilla?');
if(answer4 === 'no' || answer4 === 'n' ){
  alert('That\'s right!');
  userPoints++;
} else {
  alert('Leah\'s favorite ice cream is blue moon');
}

let answer5;
answer5 = prompt('Is Leah\'s favorite season summer?');
if(answer5 === 'no' || answer5 === 'n' ){
  alert('That\'s right!');
  userPoints++;
} else {
  alert('Leah\'s favorite season is fall');
}

let answer6;
console.log(typeof(answer6));

let attempts = 4;

while(attempts > 0){
  console.log('in the while loop, attempts', attempts);

  answer6 = parseInt(prompt('Guess a number between 1-10'));

  if(answer6 === 7){
    alert('You\'re right!');
    // add points
    userPoints++;
    attempts = 0;
    break;
  } else if(answer6 > 7 ){
    alert ('Too high');
    //count attempt
    attempts--;
    alert('you have ' + attempts + ' attempts left!');
  } else if(answer6 < 7 ){
    alert ('Too low');
    //count attempt
    attempts--;
    alert('you have ' + attempts + ' attempts left!');
  }
  else {
    alert('Try again');
  }


}


console.log('user points total:', userPoints);




// As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.

function questionSevenExample(){
  console.log('inside the function');
  // correct answers that are stored in an array.
  let favoriteFoods = ['pizza', 'tacos','alfraido','ice cream', 'chocolate'];
  // Give the user 6 attempts to guess the correct answer.
  let attempts = 0;
  let userTrys = 0;



  while(attempts !== 6){
    //I would like to guess the answer to a question
    let userResponse = prompt('What are some of my favorite foods?');
    let userInput = userResponse.toLowerCase().trim();
    console.log('user input: ', userInput);

    if(favoriteFoods.indexOf(userInput) >= 0){
      alert('Good Guess ' + userResponse + ' is a favorite food.');
      //increment the attempts
      attempts = 6;
      userTrys++;
      userPoints++;
      break;
      //finish the round
    } else {
      alert('Wrong I dont like that food.');
      attempts++;
    }
    console.log('attempts after else statement',attempts);

  } // while loop

  alert('all my favorites are ' + favoriteFoods.join(', '));
  //is lets use the DOM to see the results on the actual html page.
  let sectionHTML = document.getElementById('favoriteFoods');
  let message =   'You got ' + userPoints + ' points after ' + userTrys + ' attempts';
  sectionHTML.innerHTML = message;

} // function

// questionSevenExample();

// // Question 7
// let userPoints = 0;

// function getCookieInfo() {
//   let cookieInfo = ['chocolate chip','sugar','monster','snickerdoodle','shortbread'];
//   console.log('did we get cookies',cookieInfo);

//   let attempts = 0;
//   let correctAnswer = false;
//   while (attempts !== 6 && correctAnswer === false) {

//     let cookieInput = prompt('Cookies are a sweet treat. Guess one of my favorite cookie flavors.');
//     let cookieInputToLowerCase = cookieInput.toLowerCase();
//     if (cookieInfo.indexOf(cookieInputToLowerCase) >= 0) {
//       userPoints++;
//       console.log('user entered cookie flavor ', cookieInput);
//       correctAnswer = true;
//       alert(
//         'Correct, a ' +
//           cookieInput +
//           ' cookie is one of my favorite cookies to eat. Chocolate chip, sugar, monster, snickerdoodle and shortbread cookies are all great flavors.'
//       );
//       attempts = 6;
//     } else {
//       alert('That is not one of my favorites.');
//     }
//     attempts++;
//     console.log('Logging cookie answer', cookieInfo);
//     console.log('Logging cookie answer', userPoints);
//   }
// }