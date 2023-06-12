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

  const logOut = async () => {
    await UserService.logout();
    setRedirectToHome(true);
  };

  if (redirectToHome) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  return (
    <nav color="custom-purple" className="navbar navbar-logged img-header">
      <div className="navbar-brand">
        <Link to="/notes">
          <img src={LogoImage} alt="Logo"/>
        </Link>
        <button
          className={`navbar-burger burger`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu"
        >
        </button>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div align="right" className="navbar-item navbar-end">
          <div className="navbar-item">
            <div className="dropdown">
              <div className="dropdown-trigger">
                <Button className="button" color="white" outlined>
                  <span>Exemplo ▼</span>
                </Button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <div className="dropdown-item">
                    <Link to="/users/edit">User Edit</Link>
                  </div>
                  <div className="dropdown-divider" />
                  <div className="dropdown-item">
                    <a href="#" onClick={logOut}>
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
