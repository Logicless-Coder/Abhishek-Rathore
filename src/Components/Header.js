import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

function Header() {
  return (
    <div className="header">
      <div>
        <Logo />
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
