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
zero.classList.add('button');
zero.value = zero.textContent;
zero.id = 'zerobutton';

let dot = document.createElement('button'); //adds "." button
bottomContainer.appendChild(dot);
dot.textContent = ".";
dot.classList.add('button');
dot.value = ".";

//display functions
const display = document.querySelector('.display');
const displayUnit = document.querySelector('.displayunit');
let displayValue = '';

const buttons = document.querySelectorAll('.button');
buttons.forEach(function(currentBtn) { //display changes based on text content of *number* button pressed
    currentBtn.addEventListener('click', () => {
        displayValue += `${currentBtn.value}`;
        display.textContent = displayValue;
    })
});

//numbers and operations
let firstNum;
let secondNum;
let operator;

function check() {
    if (firstNum === undefined) {
        firstNum = displayValue;
        displayUnit.textContent = `${firstNum}`;
    } else if (firstNum !== undefined) { //once secondNum is occuped operator function is called. firstNum is set to value.
        secondNum = displayValue;

        switch (secondNum === '') { //If user tries to operate with nothing, displayValue changes back to firstNum/ value
            case true:
                displayValue = parseInt(firstNum);
                display.textContent = firstNum;
                break;
            default:
                displayValue = operate(operator, firstNum, secondNum)
                break;
        }

        switch (Number.isInteger(displayValue)) { //rounds displayValue to 3 decimal points if non-integer
            case false:
                displayValue = displayValue.toFixed(3);
                break;
            default:
                break;
        }

        switch (displayValue === 'NaN') {
            case true:
                displayValue = 'Nope';
                break;
            default:
                break;
        }
        
        displayUnit.textContent = `${firstNum}` + operator + `${secondNum}` + '=';
        
        firstNum = displayValue;
        secondNum = undefined;
    }
}

const operators = document.querySelectorAll('#operator');
operators.forEach(function(currentOp) {
    currentOp.addEventListener('click', () => { //once operator is clicked current display value is added to variable and reset
        check(); //add current display value to variable then resets display value
        displayUnit.textContent += currentOp.textContent;
        display.textContent = displayValue + currentOp.textContent;

        switch(displayValue === 'Infinity' || displayValue === '-Infinity' || displayValue === NaN) {
            case true: //If displayValue returns Infinity, display set to WTF
                firstNum = undefined;
                display.textContent = 'WTF';
                break;
            default:
                break;
        }

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
    operator = undefined;
});

const allClear = document.querySelector('.clear');
allClear.addEventListener('click', () => {
    firstNum = undefined;
    secondNum = undefined;
    displayValue = '';
    display.textContent = '';
});

const negative = document.querySelector('.negative');
negative.addEventListener('click', () => {
    switch(displayValue.slice(0,1) === "-") {
        case false:
            displayValue = '-' + displayValue;
            display.textContent = displayValue;
            break;
        default:
            break;
    }
});

const backspace = document.querySelector('.back');
backspace.addEventListener('click', () => {
    let value = display.textContent.split('');
    value.splice(-1, 1);
    let newValue = value.join('');

    displayValue = newValue;
    display.textContent = newValue;
});