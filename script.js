const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');
const display = calculator.querySelector('.calculator-display');
/* Starting with adding in basic functions */
const add = function(num1, num2) {
    return num1 + num2;
} 
const subtract = function(num1, num2) {
    return num1 - num2;
}
const multiply = function(num1, num2) {
  return num1 * num2 ;
}
const divide = function(num1, num2) {
      if (num2 === 0) {
        return "OOPS";
    } else {
    return num1 / num2;
    }
};
let firstNumber = "";
let operator = "";
let secondNumber = "";

const operate = function(operator, num1, num2) {
  if (operator === '+') {
    return add(num1, num2);
  } else if (operator === '-') {
    return subtract(num1, num2);
  } else if (operator === '*') {
    return multiply(num1, num2);
  } else if (operator === '/') {
    return divide(num1, num2);
  }
};

keys.addEventListener('click', e => {
  if (!e.target.matches('button')) return;

  const key = e.target;
  const action = key.dataset.action;
  const keyContent = key.textContent;
  const displayedNum = display.textContent;

  // 1. DIGITS CLICKED
  if (!action) {
    if (displayedNum === '0') {
      display.textContent = keyContent;
    } else {
      display.textContent = displayedNum + keyContent;
    }
  }

  // 2. OPERATOR CLICKED (+, -, *, /)
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    firstNumber = display.textContent;
    
    // Map the action to the actual symbol expected by operate()
    if (action === 'add') operator = '+';
    if (action === 'subtract') operator = '-';
    if (action === 'multiply') operator = '*';
    if (action === 'divide') operator = '/';

    display.textContent = '0'; // Clear screen for second number
  }

  // 3. EQUALS CLICKED
  if (action === 'calculate') {
    secondNumber = display.textContent;
    const result = operate(operator, Number(firstNumber), Number(secondNumber));
    display.textContent = result;
  }

  // 4. CLEAR CLICKED
  if (action === 'clear') {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    display.textContent = '0';
  }
})