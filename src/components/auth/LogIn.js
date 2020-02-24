import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

const Login = props => {
  const email = useRef();
  const password = useRef();

  const existingUserCheck = () => {
    return fetch(`http://localhost:5000/users?email=${email.current.value}`)
      .then(_ => _.json())
      .then(user => {
        if (user.length) {
          return user[0];
        }
        window.alert("Register new user");
        return false;
      });
  };

  const handleLogin = e => {
    e.preventDefault();

    existingUserCheck().then(exists => {
      if (exists && exists.password === password.current.value) {
        localStorage.setItem("barber_user", exists.id);
        props.history.push("/");
      } else if (exists && exists.password !== password.current.value) {
        window.alert("Password does not match");
      }
    });
  };

  return (
    <main className="LoginRegisterContainer body-background">
      <section>
        <form className="form--login registerContainer barberForm loginForm" onSubmit={handleLogin}>
          <h1>My Shops</h1>
          <p className="signIn">Please sign in</p>
          <fieldset className="registerUser">
            <input ref={email} type="email" id="email" className="form-control" placeholder="Email address" required autoFocus />
          </fieldset>
          <fieldset className="registerUser loginForm">
            <input ref={password} type="password" id="password" className="form-control" placeholder="Password" required />
          </fieldset>
          <fieldset className="registerUser loginForm">
            <button className="btn btn-primary btn-sm registerUser" type="submit">
              Sign in
            </button>
          </fieldset>
          <section className="link--register registerUser loginForm">
            <Link to="/register">Not a member yet?</Link>
          </section>
        </form>
      </section>
    </main>
  );
};
export default Login;
