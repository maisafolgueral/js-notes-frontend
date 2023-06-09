/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from "react";
import { Button, Columns } from "react-bulma-components";
import UserService from "../../../services/users";
import { Redirect } from "react-router-dom";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const user = await UserService.register({
        name: name,
        email: email,
        password: password,
      });
      setRedirectToLogin(true);
    } catch (error) {
      setError(true);
    }
  };

  if (redirectToLogin === true) {
    return <Redirect to={{ pathname: "/login" }} />;
  }

  return (
    <Fragment>
      <Columns centered>
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <div className="form-content">
            <div className="field">
              <label className="label" size="small">
                Name:
              </label>
              <div className="control">
                <input
                  className="input"
                  type="name"
                  required
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" size="small">
                Email:
              </label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" size="small">
                Password:
              </label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  required
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div
              className="field is-grouped is-grouped-centered"
              breakpoint="mobile"
            >
              <div className="control">
                <a
                  className="button is-white has-text-custom-purple"
                  onClick={(e) => setRedirectToLogin(true)}
                >
                  Login or
                </a>
              </div>
              <div className="control">
                <Button color="custom-purple" outlined>
                  Register
                </Button>
              </div>
            </div>
            {error && (
              <p className="help is-danger">Email or Password invalid</p>
            )}
          </div>{" "}
        </form>
      </Columns>
    </Fragment>
  );
}

export default RegisterForm;
