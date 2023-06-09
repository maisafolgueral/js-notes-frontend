/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from "react";
import { Button, Columns } from "react-bulma-components";
import { Redirect } from "react-router-dom";
import UserService from "../../../services/users";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToRegister, setRedirectToRegister] = useState(false);
  const [redirectToNotes, setRedirectToNotes] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const user = await UserService.login({
        email: email,
        password: password,
      });
      setRedirectToNotes(true);
    } catch (error) {
      setError(true);
    }
  };

  if (redirectToRegister === true)
    return <Redirect to={{ pathname: "/register" }} />;
  else if (redirectToNotes === true)
    return <Redirect to={{ pathname: "/notes" }} />;

  return (
    <Fragment>
      <Columns centered>
        <Columns size={12}>
          <form className="form-wrapper" onSubmit={handleSubmit}>
            <div className="form-content">
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
                    onClick={(e) => setRedirectToRegister(true)}
                  >
                    Register or
                  </a>
                </div>
                <div className="control">
                  <Button color="custom-purple" outlined>
                    Login
                  </Button>
                </div>
              </div>
              {error && (
                <p className="help is-danger">Email or Password invalid</p>
              )}
            </div>{" "}
          </form>
        </Columns>
      </Columns>
    </Fragment>
  );
}

export default LoginForm;
