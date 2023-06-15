import React, { Fragment, useState } from "react";
import UserService from "../../../services/users";
import "../../../styles/users.scss";

function UsersEditFormPassword() {
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (password === password_confirmation) {
      try {
        await UserService.updatePassword({ password: password });
        setStatus("success");
      } catch (err) {
        setStatus("error");
      }
    } else {
      setStatus("error_confirmation_password");
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <label className="has-text-grey label">Password</label>
            <input
              className="input"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              name="password"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="has-text-grey label">Password Confirmation</label>
            <input
              type="password"
              className="input"
              placeholder="Confirme sua senha"
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
              name="password_confirmation"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <div className="columns">
              <div className="column has-text-right">
                <button className="button btn-update" outlined="true">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <div className="columns">
              <div className="column">
                {status === "error_update" && (
                  <p className="help is-danger">Problem in password update</p>
                )}
                {status === "error_confirmation_password" && (
                  <p className="help is-danger">Password don't match</p>
                )}
                {status === "success" && (
                  <p className="help is-primary">Updated with success</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
}

export default UsersEditFormPassword;
