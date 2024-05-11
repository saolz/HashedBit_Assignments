
let evenNumbers = "";
for (let i = 2; i <= 100; i += 2) {
  evenNumbers += i + "\n";
}
document.getElementById("evenNumbers").textContent = evenNumbers;


function calculate(num1, num2, operation) {
  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid operation';
  }
  return result;
}

function performCalculation() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  const result = calculate(num1, num2, operation);
  document.getElementById("calculatorResult").textContent = `Result: ${result}`;
}


function findTax(salary) {
  let taxAmount;
  switch (true) {
    case salary >= 0 && salary <= 500000:
      taxAmount = 0;
      break;
    case salary > 500000 && salary <= 1000000:
      taxAmount = salary * 0.1;
      break;
    case salary > 1000000 && salary <= 1500000:
      taxAmount = salary * 0.2;
      break;
    case salary > 1500000:
      taxAmount = salary * 0.3;
      break;
    default:
      taxAmount = 'Invalid salary';
  }
  return taxAmount;
}

function calculateTax() {
  const salary = parseFloat(document.getElementById("salary").value);
  const taxAmount = findTax(salary);
  document.getElementById("taxResult").textContent = `Tax Amount: ${taxAmount}`;
}


function sumOfProductOfDigits(n1, n2) {
  let sum = 0;
  let num1Str = n1.toString();
  let num2Str = n2.toString();
  let maxLength = Math.max(num1Str.length, num2Str.length);

  for (let i = 0; i < maxLength; i++) {
    let digit1 = parseInt(num1Str.charAt(num1Str.length - 1 - i)) || 0;
    let digit2 = parseInt(num2Str.charAt(num2Str.length - 1 - i)) || 0;
    sum += digit1 * digit2;
  }

  return sum;
}

function calculateSumOfProducts() {
  const n1 = parseFloat(document.getElementById("n1").value);
  const n2 = parseFloat(document.getElementById("n2").value);
  const sumOfProducts = sumOfProductOfDigits(n1, n2);
  document.getElementById("productResult").textContent = `Sum of Products: ${sumOfProducts}`;
}