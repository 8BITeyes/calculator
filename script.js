//basic math functions
const add = (a, b) => parseInt(a) + parseInt(b);
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a/b;

function operate(operator, a, b){
    if(operator === '+') {
        return add(a, b);
    } else if(operator === '-') {
        return subtract(a, b);
    } else if(operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    }
}

//adding buttons to calculator container
let numberContainer = document.querySelector('.numbercontainer');
let bottomContainer = document.querySelector('.bottomcontainer');

for(let i = 1; i <= 9; i++) { //adds buttons to html for each number 1 - 9
    let button = document.createElement('button');
    numberContainer.appendChild(button);
    button.textContent = `${i}`;
    button.classList.add('button');
    button.value = button.textContent;
}

let zero = document.createElement('button'); //adds 0 button (longer properties)
bottomContainer.appendChild(zero);
zero.textContent = 0;
zero.classList.add('zerobutton');

let dot = document.createElement('button'); //adds "." button
bottomContainer.appendChild(dot);
dot.textContent = ".";
dot.classList.add('button');
dot.value = ".";

//display functions
const display = document.querySelector('.display');
let displayValue = '';

const buttons = document.querySelectorAll('.button');
buttons.forEach(function(currentBtn) { //display changes based on text content of *number* button pressed
    currentBtn.addEventListener('click', () => {
        displayValue += `${currentBtn.value}`;
        display.textContent += currentBtn.textContent;
    })
});

//numbers and operations
let firstNum;
let secondNum;
let operator;

function check() {
    if (firstNum === undefined) {
        firstNum = displayValue;
    } else if (firstNum !== undefined) { //once secondNum is occuped operator function is called. firstNum is set to value.
        secondNum = displayValue;
        displayValue = operate(operator, firstNum, secondNum);
        firstNum = displayValue;
        secondNum = undefined;
    }
}

const operators = document.querySelectorAll('#operator');
operators.forEach(function(currentOp) {
    currentOp.addEventListener('click', () => { //once operator is clicked current display value is added to variable and reset
        display.textContent += `${currentOp.textContent}`;
        check(); //add current display value to variable then resets display value
        displayValue = '';
        operator = currentOp.textContent;
    })
});

const sum = document.querySelector('.sum');
sum.addEventListener('click', () => {
    check();
    firstNum = undefined;
    secondNum = undefined;
    display.textContent = displayValue;
})