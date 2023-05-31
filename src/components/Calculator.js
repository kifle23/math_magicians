import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';
import calculate from '../logic/calculate';

function Display({ currentValue, operator, nextValue }) {
  let displayValue = '';
  if (nextValue !== null && operator !== null) {
    displayValue = `${currentValue} ${operator} ${nextValue}`;
  } else if (operator !== null) {
    displayValue = `${currentValue} ${operator}`;
  } else {
    displayValue = currentValue;
  }
  return <div className="display">{displayValue}</div>;
}

function Calculator() {
  const [currentValue, setCurrentValue] = useState(0);
  const [operator, setOperator] = useState(null);
  const [nextValue, setNextValue] = useState(null);

  const handleNumberClick = (value) => {
    if (operator === null) {
      setCurrentValue(currentValue * 10 + value);
    } else {
      setNextValue(nextValue === null ? value : nextValue * 10 + value);
    }
  };

  const handleOperatorClick = (operator) => {
    if (nextValue !== null) {
      const result = calculate(operator, currentValue, nextValue);
      setCurrentValue(Number(result));
      setNextValue(null);
      setOperator(operator);
    } else {
      setOperator(operator);
    }
  };

  const handleEqualsClick = () => {
    if (operator !== null && nextValue !== null) {
      const result = calculate(operator, currentValue, nextValue);
      setCurrentValue(Number(result));
      setNextValue(null);
      setOperator(null);
    }
  };

  const handleClearClick = () => {
    setCurrentValue(0);
    setOperator(null);
    setNextValue(null);
  };

  return (
    <div className="calculator">
      <Display
        currentValue={currentValue}
        operator={operator}
        nextValue={nextValue}
      />
      <div className="buttons">
        <button type="button" onClick={handleClearClick}>
          AC
        </button>
        <button type="button" onClick={() => setCurrentValue(-currentValue)}>
          +/-
        </button>
        <button
          type="button"
          onClick={(e) => handleOperatorClick(e.target.value)}
          value="%"
        >
          %
        </button>
        <button
          type="button"
          className="operator"
          onClick={(e) => handleOperatorClick(e.target.value)}
          value="÷"
        >
          ÷
        </button>
        <button type="button" onClick={() => handleNumberClick(7)}>
          7
        </button>
        <button type="button" onClick={() => handleNumberClick(8)}>
          8
        </button>
        <button type="button" onClick={() => handleNumberClick(9)}>
          9
        </button>
        <button
          type="button"
          className="operator"
          onClick={(e) => handleOperatorClick(e.target.value)}
          value="x"
        >
          x
        </button>
        <button type="button" onClick={() => handleNumberClick(4)}>
          4
        </button>
        <button type="button" onClick={() => handleNumberClick(5)}>
          5
        </button>
        <button type="button" onClick={() => handleNumberClick(6)}>
          6
        </button>
        <button
          type="button"
          className="operator"
          onClick={(e) => handleOperatorClick(e.target.value)}
          value="-"
        >
          -
        </button>
        <button type="button" onClick={() => handleNumberClick(1)}>
          1
        </button>
        <button type="button" onClick={() => handleNumberClick(2)}>
          2
        </button>
        <button type="button" onClick={() => handleNumberClick(3)}>
          3
        </button>
        <button
          type="button"
          className="operator"
          onClick={(e) => handleOperatorClick(e.target.value)}
          value="+"
        >
          +
        </button>
        <button
          type="button"
          className="button-0"
          onClick={() => handleNumberClick(0)}
        >
          0
        </button>
        <button
          type="button"
          onClick={() => setCurrentValue(`${currentValue}.`)}
        >
          .
        </button>
        <button type="button" className="operator" onClick={handleEqualsClick}>
          =
        </button>
      </div>
    </div>
  );
}

Display.propTypes = {
  currentValue: PropTypes.number.isRequired,
  operator: PropTypes.string,
  nextValue: PropTypes.number,
};
Display.defaultProps = {
  operator: null,
  nextValue: null,
};

export default Calculator;
