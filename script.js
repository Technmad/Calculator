let firstNumber;
let secondNumber;
let operator;

const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const equalsBtn = document.getElementById("equal");
const clearBtn = document.getElementById("all-clear");
const deleteBtn = document.getElementById("delete");
const input = document.getElementById("input");
let lowerDisplay = document.querySelector(".lower-display").innerHTML;
let upperDisplay = document.querySelector(".upper-display").innerHTML;

equalsBtn.addEventListener("click", compute());
clearBtn.addEventListener("click", clear());
//deleteBtn.addEventListener("click", deleteN());

numberBtn.forEach((items) => {
  items.addEventListener("click", function (e) {
    let keyPressed = e.target.innerHTML;
    appendNumber(keyPressed);
    //console.log(keyPressed);
  });
});

operatorBtn.forEach((items) => {
  items.addEventListener("click", function (e) {
    let keyPressed = e.target.innerHTML;
    chooseOperation(keyPressed);
  });
});

function clear() {
  firstNumber = "";
  secondNumber = "";
  operator = undefined;
}

function compute() {
  if (operator) {
    upperDisplay = upperDisplay.concat("", lowerDisplay);
    secondNumber = lowerDisplay;
    lowerDisplay = operate(operator, firstNumber, secondNumber);
  }
}

function appendNumber(number) {
  let inputDisplay = lowerDisplay;
  if (number === "." && inputDisplay.includes(".")) return;
  if (inputDisplay.length >= 12) {
    maxDigitReached();
  } else if ((inputDisplay.length = 0)) {
    if (number == "0") {
    } else {
      lowerDisplay = inputDisplay.concat("", number);
    }
  } else {
    lowerDisplay = inputDisplay.concat("", number);
  }
}

function chooseOperation(value) {
  if (lowerDisplay) {
    operator = value;
    firstNumber = lowerDisplay;
    upperDisplay = lowerDisplay.concat("", operator);
    lowerDisplay = "";
  }
}

function operate(operator, firstNumber, secondNumber) {
  let result;
  let first = parseFloat(firstNumber);
  let second = parseFloat(secondNumber);

  switch (operator) {
    case "+":
      result = first + second;
      break;
    case "-":
      result = first - second;
      break;
    case "*":
      result = first * second;
      break;
    case "÷":
      result = first / second;
      break;
  }

  if (result.toString().length < 12) {
    return result;
  } else {
    return result.toExponential(5);
  }
}
