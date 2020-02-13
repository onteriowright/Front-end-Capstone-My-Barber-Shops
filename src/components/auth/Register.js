import React, { useRef } from "react";

const Register = props => {
  const userName = useRef();
  const email = useRef();
  const password = useRef();
  const verifyPassword = useRef();

  const existingUserCheck = () => {
    return fetch(`http://localhost:5000/users?email=${email.current.value}`)
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
    <main>
      <form className="form--login registerContainer barberForm" onSubmit={handleRegister}>
        <h1 className="h3 mb-3 font-weight-normal registerHeader">Please Register for My Barber Shops</h1>
        <fieldset className="registerUserContainer">
          <label htmlFor="userName"> Username </label>
          <input ref={userName} type="text" name="userName" className="form-control registerUser" placeholder="Enter username..." required autoFocus />
        </fieldset>
        <fieldset className="registerEmailContainer">
          <label htmlFor="inputEmail"> Email address </label>
          <input ref={email} type="email" name="email" className="form-control registerEmail" placeholder="Enter email address..." required />
        </fieldset>
        <fieldset className="registerPassContainer">
          <label htmlFor="inputPassword"> Password </label>
          <input ref={password} type="password" name="password" className="form-control registerPass" placeholder="Enter password..." required />
        </fieldset>
        <fieldset className="confirmPassContainer">
          <label htmlFor="verifyPassword"> Verify Password </label>
          <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control confirmPass" placeholder="Enter password..." required />
        </fieldset>
        <fieldset>
          <section className="register-btn">
            <button className="btn btn-primary registerButton btn-sm" type="submit">
              Sign up
            </button>
            <button onClick={() => props.history.push("/login")} className="btn btn-secondary btn-sm">
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
