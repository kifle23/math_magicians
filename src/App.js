import React from 'react';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './components/Calculator.css';

function App() {
  return (
    <div className="container">
      <Quote />
      <Calculator />
    </div>
  );
}

export default App;
