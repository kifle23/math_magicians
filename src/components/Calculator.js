import React from 'react';
import './Calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="buttons">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">% </button>
        <button type="button" className="operator">
          ÷
        </button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="operator">
          x
        </button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="operator">
          -
        </button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="operator">
          +
        </button>
        <button type="button" className="button-0">
          0
        </button>
        <button type="button">.</button>
        <button type="button" className="operator">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
