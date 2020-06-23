import React, { useRef } from "react";

const Register = props => {
  const userName = useRef();
  const email = useRef();
  const password = useRef();
  const verifyPassword = useRef();

  const existingUserCheck = () => {
    return fetch(`http://localhost:5500/users?email=${email.current.value}`)
      .then(_ => _.json())
      .then(user => {
        if (user.length) {
          console.log(user);
          window.alert("User already exist!");
          props.history.push("/register");
          return true;
        }
        return false;
      });
  };

  const handleRegister = e => {
    e.preventDefault();

    if (password.current.value === verifyPassword.current.value) {
      existingUserCheck().then(() => {
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
            userName: userName.current.value
          })
        })
          .then(_ => _.json())
          .then(createdUser => {
            if (createdUser.hasOwnProperty("id") && createdUser !== userName) {
              localStorage.setItem("barber_user", createdUser.id);
              document.body.classList.remove("logInBackground");
              props.history.push("/");
            }
          });
      });
    } else {
      window.alert("Passwords do not match");
    }
  };

  return (
    <main className="LoginRegisterContainer body-background">
      <form className="form--login registerContainer barberForm loginForm" onSubmit={handleRegister}>
        <h1 className="registerHeader">Please register new user</h1>
        <fieldset className="registerUser loginForm">
          <input
            ref={userName}
            type="text"
            name="userName"
            className="form-control registerUser"
            placeholder="Enter username..."
            required
            autoFocus
          />
        </fieldset>
        <fieldset className="registerUser loginForm">
          <input
            ref={email}
            type="email"
            name="email"
            className="form-control registerEmail"
            placeholder="Enter email address..."
            required
          />
        </fieldset>
        <fieldset className="registerUser loginForm">
          <input
            ref={password}
            type="password"
            name="password"
            className="form-control registerPass"
            placeholder="Enter password..."
            required
          />
        </fieldset>
        <fieldset className="registerUser loginForm">
          <input
            ref={verifyPassword}
            type="password"
            name="verifyPassword"
            className="form-control confirmPass"
            placeholder="Enter password again..."
            required
          />
        </fieldset>
        <fieldset className="loginForm">
          <section className="register-btn">
            <button className="btn btn-primary registerButton btn-sm registerUser" type="submit">
              Sign up
            </button>
            <button onClick={() => props.history.push("/login")} className="btn btn-secondary btn-sm registerUser">
              {" "}
              Back
            </button>
          </section>
        </fieldset>
      </form>
    </main>
  );
};

export default Register;
