import React, { Fragment } from "react";
import { Section, Container, Columns, Card } from "react-bulma-components";
import Header from "../../../components/header";
import LogoImage from "../../../assets/images/logo.png";
import "../../../styles/auth.scss";
import RegisterForm from "../../../components/auth/register_form";

const RegisterScreen = () => (
  <Fragment>
    <Header />
    <Section size="medium" className="auth">
      <Container>
        <Columns centered>
          <Columns.Column size={3}>
            <Card>
              <Card.Content>
                <Section>
                  <div className="columns is-centered">
                    <div className="column is-12">
                      <img src={LogoImage} alt="Logo" />
                    </div>
                  </div>

                  <div className="columns">
                      <p className="column is-12 subtitle has-text-grey has-text-centered is-6 has-text-weight-bold">
                        Your notes on the cloud
                      </p>
                    </div>
                  <div className="form-wrapper">
                    <RegisterForm />
                  </div>
                </Section>
              </Card.Content>
            </Card>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  </Fragment>
);

export default RegisterScreen;
