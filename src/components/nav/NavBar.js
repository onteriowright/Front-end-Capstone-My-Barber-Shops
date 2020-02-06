import React, { useContext } from "react";
import "./NavBar.css";
import { UsersContext } from "../users/UserDataProvider";

export default props => {
  const { users } = useContext(UsersContext);
  const activeUserId = parseInt(localStorage.getItem("barber_user"));
  const activeUser = users.find(user => user.id === activeUserId) || {};

  return (
    <ul className="navbar">
      <h3 className="navbar__message">Hello {activeUser.userName}! Let My Barber Shops Help You With Finding The Perfect Barbershop for You.</h3>
      {localStorage.getItem("barber_user") ? (
        <li className="navbar__item">
          <button
            className="logoutButton btn btn-secondary "
            onClick={e => {
              e.preventDefault();
              localStorage.removeItem("barber_user");
              props.history.push("/");
            }}>
            Log Out
          </button>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
