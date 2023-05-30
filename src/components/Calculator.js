import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';

function Display({ value }) {
  return <div className="display">{value}</div>;
}

function Calculator() {
  return (
    <div className="calculator">
      <Display value={0} />
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

Display.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Calculator;
