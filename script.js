let firstNumber;
let secondNumber;
let operator;
let round = false;

const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("all-clear");
const deleteBtn = document.getElementById("delete");
const input = document.getElementById("input");
let lowerDisplay = document.querySelector(".lower-display");
let upperDisplay = document.querySelector(".upper-display");

equalBtn.addEventListener("click", compute);
clearBtn.addEventListener("click", clear);
//deleteBtn.addEventListener("click", delBtn());

numberBtn.forEach((items) => {
  items.addEventListener("click", function (e) {
    let keyPressed = e.target.innerHTML;
    //console.log(keyPressed);
    appendNumber(keyPressed);
  });
});

operatorBtn.forEach((items) => {
  items.addEventListener("click", function (e) {
    let keyPressed = e.target.innerHTML;
    //console.log(keyPressed);
    chooseOperation(keyPressed);
  });
});

function clear() {
  //console.log("AC clicked");
  firstNumber = undefined;
  secondNumber = undefined;
  operator = undefined;
  upperDisplay.innerHTML = "";
  lowerDisplay.innerHTML = "";
  round = false;
}

function compute() {
  if (operator && round) {
    upperDisplay.innerHTML = upperDisplay.innerHTML.concat(
      "",
      lowerDisplay.innerHTML
    );
    secondNumber = lowerDisplay.innerHTML;
    lowerDisplay.innerHTML = operate(operator, firstNumber, secondNumber);
    round = false;
  } else if (operator) {
    upperDisplay.innerHTML = `${lowerDisplay.innerHTML}${operator}${secondNumber}`;
    firstNumber = lowerDisplay.innerHTML;
    lowerDisplay.innerHTML = operate(operator, firstNumber, secondNumber);
  }
}

function appendNumber(number) {
  let inputDisplay = lowerDisplay.textContent;
  if (number === "." && inputDisplay.includes(".")) return;
  if (inputDisplay.length >= 12) {
    maxDigitReached();
  } else if ((inputDisplay.length = 0)) {
    if (number == "0") {
    } else {
      lowerDisplay = inputDisplay.concat("", number);
    }
  } else {
    lowerDisplay.textContent = inputDisplay.concat("", number);
  }
}

function chooseOperation(value) {
  if (value == "%") {
    let newNumber = parseFloat(lowerDisplay.textContent) / 100;
    if (newNumber.toString().length <= 12) {
      lowerDisplay.innerHTML = newNumber;
    } else {
      lowerDisplay.innerHTML = newNumber.toExponential(5);
    }
  } else {
    if (lowerDisplay.textContent) {
      round = true;
      operator = value;
      firstNumber = lowerDisplay.textContent;
      upperDisplay.textContent = lowerDisplay.textContent.concat("", operator);
      lowerDisplay.textContent = "";
    }
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

function delBtn() {}
function maxDigitReached() {}
