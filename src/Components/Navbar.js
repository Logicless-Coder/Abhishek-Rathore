import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a>About Me</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a>My Work</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
