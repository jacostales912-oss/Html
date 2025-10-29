let num1 = Number(prompt("Enter first number:"));

if (isNaN(num1) || num1 == "") {
  alert("X please enter a valid number for the first input.");
} else {
  let num2 = Number(prompt("Enter second number:"));
  if (isNaN(num2) || num2 === "") {
  } else {
    let op = prompt("Enter operator (=,-,*,/,%");

    let result = calculator(num1, num2, op);

    num1 = Number(num1);
    num2 = Number(num2);

    alert("Result:" + result);
  }
}

function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
      "Error: Divition by zero";
    case "%":
      return a % b;
    default:
      return "Invalid operator";
  }
}
