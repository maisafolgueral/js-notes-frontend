/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Button } from "react-bulma-components";
import LogoImage from "../../assets/images/logo-white.png";
import "../../styles/header.scss";
import UserService from "../../services/users";
import { Redirect, Link } from "react-router-dom";
import "../../styles/header.scss";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faList } from "@fortawesome/free-solid-svg-icons";

function HeaderLogged(props) {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const logOut = async () => {
    await UserService.logout();
    setRedirectToHome(true);
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  if (redirectToHome) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  return (
    <nav color="custom-purple" className="navbar navbar-logged img-header">
      <div className="navbar-brand">
        <Link to="/notes">
          <img src={LogoImage} alt="Logo" />
        </Link>
        <button
          className={`navbar-burger burger`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu"
        ></button>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div align="right" className="navbar-item navbar-end">
          <div className="navbar-item">
            <div className={`dropdown is-right ${isOpen ? "is-active" : ""}`}>
              <div className="dropdown-trigger">
                <Button
                  className="button"
                  color="white"
                  onClick={handleMenuToggle}
                  outlined
                >
                  <span>Exemplo ▼</span>
                </Button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                <div className="dropdown-content is-centered">
                  <div className="dropdown-item">
                    <Link
                      to="/users/edit"
                      className="button is-white has-text-custom-purple is-fullwidth"
                    >
                      User Edit
                    </Link>
                  </div>
                  <div className="dropdown-divider" />
                  <div className="dropdown-item">
                    <a href="#" onClick={logOut} className="button is-white has-text-custom-purple is-fullwidth">
                      LogOut
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderLogged;
