'use strict';
console.log('Hello from the js file');

// prompt user for input

let userName = prompt('what is your name?');
console.log('userName is: ', userName);

// let answer;
// while(answer !== 'userName'){
//   answer = prompt('Please enter your name');
//   if(answer !== 'userName'){
//     alert('Try again!');
//   } else {
//     alert('Your name is ', userName);
//   }
// }

// userName.toLowerCase

let lowerCaseName = userName.toLowerCase();
console.log(lowerCaseName)
// validate input with conditional logic

// if (lowerCaseName === 'bob  || lowerCaseName === 'larry') {
alert ('Surprise Quiz! Please enter answers as yes or no, y or n');
// } else {

// }

let answer1;

answer1 = prompt('Did Leah study history?');
if(answer1 === 'no' || answer1 === 'n' ){
  alert('That\'s right! Leah studied business.');
} else {
  alert('Incorrect. Leah studied business');
}


let answer2;

answer2 = prompt('Does Leah live in Iowa?');
if(answer2 === 'yes' || answer2 === 'y' ){
  alert('That\'s right! Leah lives in Iowa');
} else {
  alert('Incorrect. Leah lives in Iowa');
}

let answer3;

answer3 = prompt('Does Leah have a dog');
if(answer3 === 'no' || answer3 === 'n' ){
  alert('That\'s right! Leah has a cat, not a dog.');
} else {
  alert('False. Leah has a cat!');
}


let answer4;

answer4 = prompt('Is Leah\'s favorite ice cream vanilla?');
if(answer4 === 'no' || answer4 === 'n' ){
  alert('That\'s right!');
} else {
  alert('Leah\'s favorite ice cream is blue moon');
}

let answer5;

answer5 = prompt('Is Leah\'s favorite season summer?');
if(answer5 === 'no' || answer5 === 'n' ){
  alert('That\'s right!');
} else {
  alert('Leah\'s favorite season is fall');
}
//   let answer2;
//   while(answer !== 'location'){
//     answer = prompt('Does Leah live in Iowa?');
//     if(answer !== 'userName'){
//       alert('Try again!');
//     } else {
//       alert('Leah lives in ' userName);
//     }
//   }

//   let answer3;
//   while(answer !== 'pets'){
//     answer = prompt('Does Leah have a dog?');
//     if(answer !== 'userName'){
//       alert('Try again!');
//     } else {
//       alert('Leah has a ' userName);
//     }
//   }

//   let answer4;
//   while(answer !== 'iceCream'){
//     answer = prompt('Is vanilla my favorite ice cream');
//     if(answer !== 'userName'){
//       alert('Try again!');
//     } else {
//       alert('My favorite ice cream is ' blue moon);
//     }
//   }

//   let answer5;
//   while(answer !== 'season'){
//     answer = prompt('Is summer my favorite season?');
//     if(answer !== 'userName'){
//       alert('Try again!');
//     } else {
//       alert('My favorite season is ' userName);
//     }
//   }
// // Look at data types

// // Intro to arrays

// //js
// // Prompt the user a total of exactly five yes or no questions.

// // The user input for the answer must accept either y/n or yes/no responses
// // use  .toUpperCase() or .toLowerCase()
// // alert()
// // Be sure to let the user know if they answered the question correctly by alerting them with a response.
// // Add console.log() messages within your app to notify the developer
// // (don’t delete) your console.log() messages and replace them with the alerts() to complete the project.
// // As a user, I would like a personalized welcome message so that I feel like I am interacting with the site owner.
// // Ask the user their name through a prompt()
// // Display that name back to the user through a custom greeting welcoming them to your site.
// // Display the user’s name back to them in your final message to the user.
