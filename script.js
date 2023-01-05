let number1 = undefined;
let number2 = undefined;
let ope = undefined;
let flag = 0;

function add(num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function operate(num1, num2, operator) {
  if (operator == "+") return add(num1, num2);
  else if (operator == "-") return subtract(num1, num2);
  else if (operator == "*") return multiply(num1, num2);
  else if (operator == "/") return divide(num1, num2);
}
function buttonPressed(e) {
  let screen = document.querySelector(".screen");
  if (`${e.target.className}` == "button") {
    let a = `${e.target.id}`;
    if ((a >= 0 && a <= 9) || a == ".") {
      if (flag == 0) {
        screen.textContent += a;
        if (number1 == undefined) {
          number1 = a;
        } else {
          number1 = number1 + a;
        }
      } else {
        screen.textContent += a;
        if (number2 == undefined) {
          number2 = a;
        } else {
          number2 = number2 + a;
        }
      }
    }
    else if( (a=="+" || a=="-") && number1==undefined){
        screen.textContent += a;
        number1 = a;
    } else if (a == "+" || a == "-" || a == "*" || a == "/") {
      flag = 1;
      ope = a;
      screen.textContent += ope;
    }
     else if (a == "=") {
      if (number1 == undefined) {
        ope = undefined;
        number2 = undefined;
        screen.textContent = null;
      } else if (number1 != undefined && number2 == undefined) {
        screen.textContent=number1;
      } else if (number2 != undefined) {
        number1 = operate(number1, number2, ope);
        screen.textContent = number1;
        ope = undefined;
        flag = 0;
        number2 = undefined;
      } else {
        ope = undefined;
        screen.textContent = number1;
      }
    }
  } else if (`${e.target.className}` == "button1") {
    let a = `${e.target.id}`;
    if (a == "clear") {
      number1 = undefined;
      number2 = undefined;
      ope = undefined;
      screen.textContent = null;
    } else {
      if (number2 != undefined) {
        number2 = ~~(number2 / 10);
        if (number2 != 0) screen.textContent = number1 + ope + number2;
        else {
          number2 = undefined;
          screen.textContent = number1 + ope;
        }
      } else if (ope != undefined) {
        ope = undefined;
        screen.textContent = number1;
      } else if (number1 != undefined) {
        number1 = ~~(number1 / 10);
        if (number1 != 0) screen.textContent = number1;
        else {
          number1 = undefined;
          screen.textContent = number1;
        }
      }
    }
  }
}

window.addEventListener("click", buttonPressed);
