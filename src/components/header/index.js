import React, { useState } from "react";
import LogoImage from "../../assets/images/logo.png";
import "../../styles/header.scss";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <img src={LogoImage} alt="Logo" />
          </Link>
          <button
            className={`navbar-burger burger ${isOpen ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu"
            onClick={handleMenuToggle}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div
          className={`navbar-menu ${isOpen ? "is-active" : ""}`}
          id="navbar-menu"
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="columns">
                <div className="column">
                  <Link
                    to="/register"
                    className="button is-white has-text-custom-purple is-fullwidth"
                  >
                    Register
                  </Link>
                </div>
                <div className="column">
                  <Link
                    to="/login"
                    className="button is-outlined is-custom-purple is-fullwidth"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
