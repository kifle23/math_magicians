import React, { useState } from 'react';
import Display from './Display';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: '',
    next: null,
    operation: null,
  });
  const handle = (e) => {
    setState(() => calculate(state, e.target.innerText));
  };
  const { total, operation, next } = state;
  return (
    <>
      <div className="some-math">Let&apos;s do some math!</div>
      <div className="calculator">
        <Display total={Number(total)} operation={operation} next={next} />
        <div className="buttons">
          <button type="button" onClick={handle}>
            AC
          </button>
          <button type="button" onClick={handle}>
            +/-
          </button>
          <button type="button" onClick={handle} value="%">
            %
          </button>
          <button type="button" className="operator" onClick={handle} value="÷">
            ÷
          </button>
          <button type="button" onClick={handle}>
            7
          </button>
          <button type="button" onClick={handle}>
            8
          </button>
          <button type="button" onClick={handle}>
            9
          </button>
          <button type="button" className="operator" onClick={handle} value="x">
            x
          </button>
          <button type="button" onClick={handle}>
            4
          </button>
          <button type="button" onClick={handle}>
            5
          </button>
          <button type="button" onClick={handle}>
            6
          </button>
          <button type="button" className="operator" onClick={handle} value="-">
            -
          </button>
          <button type="button" onClick={handle}>
            1
          </button>
          <button type="button" onClick={handle}>
            2
          </button>
          <button type="button" onClick={handle}>
            3
          </button>
          <button type="button" className="operator" onClick={handle} value="+">
            +
          </button>
          <button type="button" className="button-0" onClick={handle}>
            0
          </button>
          <button type="button" onClick={handle}>
            .
          </button>
          <button type="button" className="operator" onClick={handle}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
