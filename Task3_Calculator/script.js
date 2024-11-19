let currentInput = "";
let lastInput = "";
let operator = "";

function appendNumber(number) {
  currentInput += number;
  updateDisplay(currentInput);
}

function appendOperator(op) {
  if (currentInput === "") return;
  if (operator) calculate();
  lastInput = currentInput;
  operator = op;
  currentInput = "";
  updateDisplay(lastInput + " " + operator);
}

function calculate() {
  if (currentInput === "" || lastInput === "" || operator === "") return;
  let result;
  const num1 = parseFloat(lastInput);
  const num2 = parseFloat(currentInput);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error";
      break;
    case "%":
      result = num1 % num2;
      break;
    case "^":
      result = Math.pow(num1, num2);
      break;
    default:
      return;
  }

  updateDisplay(result);
  currentInput = result.toString();
  lastInput = "";
  operator = "";
}

function clearDisplay() {
  currentInput = "";
  lastInput = "";
  operator = "";
  updateDisplay(0);
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput || "0");
}

function updateDisplay(content) {
  document.getElementById("display").innerText = content;
}