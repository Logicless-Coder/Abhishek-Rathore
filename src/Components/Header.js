import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo-div">
        <Logo />
      </div>
      <div className="navbar-div">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
