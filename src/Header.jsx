// Header.js

import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Drumify</div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
