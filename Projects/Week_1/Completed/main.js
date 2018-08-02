/*jshint esversion: 6 */

"use strict";
const minNumber = 0;
const maxNumber = 50;
//Pick a random number between minNumber and maxNumber
let correctAnswer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let isCorrect = false;

//loop 5 times or until result is equal to correctAnswer
for (let i = 0; i < 5; i++) {
  let result = prompt("Guess a number between 0 and 50");
  if (result == correctAnswer) {
    alert("Correct!");
    break;
  } else if (result < correctAnswer) {
    alert("too low!");
  } else if (result > correctAnswer) {
    alert("Too high!");
  }
}
