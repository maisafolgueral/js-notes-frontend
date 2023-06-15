import React, { Fragment } from "react";
import HeaderLogged from "../../../components/header_logged";
import UsersEditForm from "../../../components/users/user_edit_form";
import "../../../styles/users.scss";
import UsersEditPasswordForm from "../../../components/users/user_edit_password_form";
//import UsersDelete from "../../../components/users/users_delete";

const UsersEditScreen = () => (
  <Fragment>
    <HeaderLogged />
    <section className="section is-medium users">
      <div class="container">
        <div className="columns is-centered users-edit">
          <div className="column is-4">
            <h5 class="title is-5 has-text-grey has-text-left">
              Informações Pessoais
            </h5>
            <div class="card">
              <div class="card-content">
                <UsersEditForm />
              </div>
            </div>
          </div>
        </div>

        <div className="columns is-centered users-edit">
          <div className="column is-4">
            <h5 class="title is-5 has-text-grey has-text-left">Password</h5>
            <div class="card">
              <div class="card-content">
                <UsersEditPasswordForm />
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-4 has-text-right">
            Users Delete Button...
            <div></div>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
);

export default UsersEditScreen;
