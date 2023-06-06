import React from "react";
import LogoImage from "../../assets/images/logo.png";
import "../../styles/header.scss";

function Header() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <img src={LogoImage} alt="Logo" />
          <button
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbar-menu" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">Item 1</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
