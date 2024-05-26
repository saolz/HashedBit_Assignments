import React, { useState } from 'react';
import './index.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const calculate = () => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
      setResult('Please enter valid numbers');
      return;
    }

    let calculatedResult;

    switch (operation) {
      case '+':
        calculatedResult = parsedNum1 + parsedNum2;
        break;
      case '-':
        calculatedResult = parsedNum1 - parsedNum2;
        break;
      case '*':
        calculatedResult = parsedNum1 * parsedNum2;
        break;
      case '/':
        if (parsedNum2 === 0) {
          setResult('Cannot divide by zero');
          return;
        }
        calculatedResult = parsedNum1 / parsedNum2;
        break;
      default:
        setResult('Invalid operation');
        return;
    }

    setResult(`Result: ${calculatedResult}`);
  };

  return (
    <div className="calculator">
      <div className="input-fields">
        <input
          type="text"
          value={num1}
          onChange={handleNum1Change}
          placeholder="Enter first number"
        />
        <input
          type="text"
          value={num2}
          onChange={handleNum2Change}
          placeholder="Enter second number"
        />
        <select value={operation} onChange={handleOperationChange}>
          <option value="">Select operation</option>
          <option value="+">Addition (+)</option>
          <option value="-">Subtraction (-)</option>
          <option value="*">Multiplication (×)</option>
          <option value="/">Division (÷)</option>
        </select>
      </div>
      <div className="result">
        <span>{result}</span>
      </div>
      <div className="buttons">
        <button onClick={calculate}>Calculate</button>
      </div>
    </div>
  );
};

export default Calculator;