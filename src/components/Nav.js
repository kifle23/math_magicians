import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="logo">Math Magicians</div>
          <div>
            <ul className="nav-ul">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/calculator">Calculator</NavLink>
              </li>
              <li>
                <NavLink to="/quote">Quote</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
