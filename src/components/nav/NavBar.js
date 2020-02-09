import React, { useContext } from "react";
import { UsersContext } from "../users/UserDataProvider";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default props => {
  const { users } = useContext(UsersContext);
  const activeUserId = parseInt(localStorage.getItem("barber_user"));
  const activeUser = users.find(user => user.id === activeUserId) || {};

  return (
    <ul className="navbar">
      <h3 className="navbar__message">{activeUser.userName}</h3>
      <div className="navbar_items_position">
        <Link style={{ textDecoration: "none" }} className="navbar__item" to="/">
          Home
        </Link>
        <Link style={{ textDecoration: "none" }} className="navbar__item" to="/favoriteBarberShops">
          Favorites
        </Link>
        {localStorage.getItem("barber_user") ? (
          <>
            <li className="navbar__item">
              <button
                className="logoutButton btn btn-secondary "
                onClick={e => {
                  e.preventDefault();
                  localStorage.removeItem("barber_user");
                  props.history.push("/");
                }}
              >
                Log Out
              </button>
            </li>
          </>
        ) : (
          ""
        )}
      </div>
    </ul>
  );
};
