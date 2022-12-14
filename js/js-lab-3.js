// Instructions
// Continue to build off of your lab 02 by adding additional functionality to your About Me Guessing Game. Work in the same repository as you did for Lab 2, and modify your README.md file to describe your project with the new features you are adding.

// As a user, I would like to view a series of data related to the site owners interest so that the I can quickly view more information about them.
// <!-- Create a “Top Ten” at the bottom of your HTML page as an ordered list in HTML. Some ideas that you can include could be top ten movies, top ten favorite places, or top ten places to visit. You may choose to do whatever top ten list that you wish. -->
// <!-- Convert your work experience and education summary into an unordered list using HTML -->
// As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.
// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
// As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.
// As a user, I would like to know my final score so that I can know how well I did.
// Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.
// In addition to the user stories stated above, continue to use console.logs throughout the code to track the questions that are being asked to the user, and add addtional CSS to style your HTML page.

// Stay within scope of what was taught so far in class. Do not write functions within your application. Avoid the use of “helper” methods such as .includes() and .join(). Work with the instructional staff directly if you have questions about this requirement.


'use strict';
console.log('The JS file is alive');
//global variables
let userName; //creating a space in memory to hold some information later.
let petInfo;
let nativeInfo; //declaring variables
let kidInfo;
let travelInfo;


//-------------------------
userName = prompt('What is your name?');
let toLowerCaseName = userName.toLowerCase();
console.log('User name is: ', userName);
console.log('User name data type is: ', typeof(userName));
console.log('Name Lower Case: ', toLowerCaseName);

if(toLowerCaseName === 'beth' || toLowerCaseName === 'eva' || toLowerCaseName === 'leah' || toLowerCaseName === 'craig' || toLowerCaseName === 'katie' || toLowerCaseName === 'ruthann'){
  alert('Welcome back to the site, ' + userName);
} else {
  alert('Welcome, new friend!');
}
//-------------------------

petInfo = prompt('Do you have a pet?');
let toUpperCasePetInfo = petInfo.toUpperCase();
console.log('pet, y or n: ', petInfo);
console.log('pet info upper case: ', toUpperCasePetInfo);

if(toUpperCasePetInfo === 'Y' || toUpperCasePetInfo === 'YES'){
  alert('Congratulations on beng a pet owner, ' + userName + '! I have a dog and two cats.');
} else {
  alert('Life is lonely without a pet!');
}
//-------------------------

nativeInfo = prompt('Are you a Native Iowan');
let toUpperCaseNativeInfo = nativeInfo.toUpperCase();
console.log('native, y or n: ', nativeInfo);
console.log('native info upper case: ', toUpperCaseNativeInfo);


if(toUpperCaseNativeInfo === 'Y' || toUpperCaseNativeInfo === 'YES'){
  alert('We are both Native Iowans!');
} else {
  alert('Hmmmm, wonder where you are from?');
}
//-------------------------

kidInfo = prompt('Do you have children?');
let toUpperCaseKidInfo = kidInfo.toUpperCase();
console.log('children?: ', kidInfo);
console.log('kid info upper case: ', toUpperCaseKidInfo);

if(toUpperCaseKidInfo === 'N' || toUpperCaseKidInfo === 'NO'){
  alert('Kids are not for everyone, ' + userName) + '!';
} else {
  alert('I have children, too ' + userName + '. Two girls to be exact!');
}
//-------------------------

travelInfo = prompt('Are you a fan of travelling?');
let toLowerCaseTravelInfo = travelInfo.toLowerCase();
console.log('travel info value', travelInfo);
console.log('travel info lower case ', toLowerCaseTravelInfo);

if(toLowerCaseTravelInfo === 'no' || toLowerCaseTravelInfo === 'yes'){
  alert('Let us head out on adventure, ' + userName + '!');
} else {
  alert('This alert should never be triggered!');
}


alert('Hello ' + userName + ' your pet\'s ' + petInfo + ' from iowa? ' + nativeInfo + ' kiddos ' + kidInfo + ' lets travel to ' + travelInfo);