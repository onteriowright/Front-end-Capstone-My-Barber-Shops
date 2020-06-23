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
      <h3 className="navbar__message">Hello, {activeUser.userName}</h3>
      <div className="navbar_items_position">
        <Link style={{ textDecoration: "none" }} className="navbar__item" to="/">
          Home
        </Link>
        <Link style={{ textDecoration: "none" }} className="navbar__item" to="/favoriteBarberShops">
          Favorites
        </Link>
        <Link style={{ textDecoration: "none" }} className="navbar__item" to="/shopReviews">
          Reviews
        </Link>
        {/* only show log out btn when user is logged in */}
        {localStorage.getItem("barber_user") ? (
          <>
            <li className="navbar__item">
              <button
                className="logoutButton btn btn-sm"
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
