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

let buttonContainer = document.querySelector('.buttoncontainer');

for(let i = 1; i <= 9; i++) { //adds buttons to html for each number 0 - 9
    let button = document.createElement('button');
    buttonContainer.appendChild(button);
    button.textContent = `${i}`;
    button.classList.add('numberbutton');
}
