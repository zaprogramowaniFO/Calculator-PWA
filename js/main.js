
"use strict";

//rejestracja pracowników

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}




//kod aplikacji poniżej

const screen = document.querySelector('.screen');
const numButton = document.querySelectorAll('.button__num--js');
const opButton = document.querySelectorAll('.button__op--js');
const resultButton = document.querySelector('.button_sum--js');
const clearButton = document.querySelector('.button__clr--js');

let currentNumber = 0;
let previousNumber = 0;
let operationType = null;
let prev = 0;
let currnet = 0;

function clear () {
    console.log('clear');
    display('0');
    currentNumber = 0;
    previousNumber = 0;
    operationType = null;
}


function display(number){
    screen.value = number;
}

function round(number, k){
    factor = Math.pow(10, k);
    return Math.round(number * factor)/factor;
}


function result() {
    prev = parseFloat(previousNumber); 
    current = parseFloat(currentNumber); 
    operationType 

    switch(operationType) {
        case "+":
            currentNumber = prev + current;
            break;
        case "-":
            currentNumber = prev - current;
            break;
        case "*":
            currentNumber = prev * current;
            break;
        case "/":
            currentNumber = prev / current;
            break;
        default:
            console.log('err');
            break;
    };
    console.log(`result: ${currentNumber}`);
    display(round(currentNumber, 8));
}

numButton.forEach((button) => {
    button.addEventListener("click", () => {
        if(currentNumber == 0) currentNumber = button.value;
        else currentNumber += button.value;
        console.log(`button: ${button.value}`);
        console.log(`value: ${currentNumber}`);
        display(currentNumber);
    });
});

opButton.forEach((button) => {
    button.addEventListener("click", () => {
        previousNumber = currentNumber;
        currentNumber = 0;
        console.log(`previous: ${previousNumber}`);
        operationType = button.value;        
        console.log(`operation: ${operationType}`);

    });
});

clearButton.addEventListener("click", clear);

resultButton.addEventListener("click", result);