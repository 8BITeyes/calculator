//basic math functions
const add = (a, b) => a + b;
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
    } else if(operator === '/') {
        return divide(a, b);
    }
}

let numberContainer = document.querySelector('.numbercontainer');
let bottomContainer = document.querySelector('.bottomcontainer');

for(let i = 1; i <= 9; i++) { //adds buttons to html for each number 1 - 9 (makes HTML neater)
    let button = document.createElement('button');
    numberContainer.appendChild(button);
    button.textContent = `${i}`;
    button.classList.add('button');
}

let zero = document.createElement('button'); //adds 0 button (longer properties)
bottomContainer.appendChild(zero);
zero.textContent = 0;
zero.classList.add('zerobutton');

let dot = document.createElement('button'); //adds "." button
bottomContainer.appendChild(dot);
dot.textContent = ".";
dot.classList.add('button');