import React from "react";
import { Route, Redirect } from "react-router-dom";
import MainProvider from "./providers/MainProvider";
import ApplicationViews from "./ApplicationViews";
import LogIn from "./auth/LogIn";
import Register from "./auth/Register";
import NavBar from "./nav/NavBar";
import "./BarberShopApp.css";
// import { Button, Alert, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default () => (
  <>
    <section className="body-font">
      <Route
        render={() => {
          if (localStorage.getItem("barber_user")) {
            return (
              <>
                <Route
                  render={props => (
                    <MainProvider>
                      <NavBar {...props} />
                    </MainProvider>
                  )}
                />
                <section className="body">
                  <Route render={props => <ApplicationViews {...props} />} />
                </section>
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      <Route path="/login" render={props => <LogIn {...props} />} />
      <Route path="/register" render={props => <Register {...props} />} />
    </section>
  </>
);
