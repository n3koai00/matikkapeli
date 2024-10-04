'use strict'

let rand_num1 = 0;
let rand_num2 = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange(1, 10);
    rand_num2 = getRandomIntNumberInRange(1, 10);
    document.querySelector('#num1').innerHTML = rand_num1;
    document.querySelector('#num2').innerHTML = rand_num2;
}

const updateScoreboard = () => {
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById('incorrectCount').textContent = incorrectAnswers;
}

addEventListener('DOMContentLoaded', () => {
    randomizeNumbers();
});

document.querySelector('#calculate').addEventListener('click', () => {
    const answer = Number(document.querySelector('#userAnswer').value);
    const correctAnswer = rand_num1 + rand_num2;
    
    if (answer === correctAnswer) {
        alert('Correct!');
        correctAnswers++;
    } else {
        alert(`Incorrect! The correct answer was ${correctAnswer}.`);
        incorrectAnswers++;
    }

    updateScoreboard();
    
    document.querySelector('#userAnswer').value = '';
    randomizeNumbers();
});
