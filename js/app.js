'use strict';
console.log('Hello from the js file');

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

let answer6;
answer6 = parseInt(prompt('Guess a number between 1-10'));
console.log(typeof(answer6));
if(answer6 === 7)
{
  alert('You\'re right!');
  // add points
} else if(answer6 > 7 ){
  alert ('Too high');
  //count attempt
} else if(answer6 < 7 ){
  alert ('Too low');
  //count attempt
}
else {
  alert('Try again');

}

