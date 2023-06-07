import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './components/Calculator.css';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="app">
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="quote" element={<Quote />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
