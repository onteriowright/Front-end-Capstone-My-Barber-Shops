import React, { useState, useEffect } from "react";

export const UsersContext = React.createContext();

export const UserDataProvider = props => {
  const [users, setUsers] = useState([]);

  // Fetch users from DB
  const getUsers = () => {
    return fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(setUsers);
  };

  // Send post to add users to DB
  const addUsers = user => {
    return fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(user)
    }).then(getUsers);
  };

  // Edit users
  const editUsers = userObject => {
    return fetch(`http://localhost:5000/users/${userObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(userObject)
    }).then(getUsers);
  };

  // Delete users
  const deleteUsers = userId => {
    return fetch(`http://localhost:5000/user/${userId.id}`, {
      method: "DELETE"
    }).then(getUsers);
  };

  // Get users on render
  useEffect(() => {
    getUsers();
  }, []);

  // Update users array on render
  useEffect(() => {}, [users]);

  // Make avaliable to other components
  return (
    <UsersContext.Provider
      value={{
        users,
        addUsers,
        editUsers,
        deleteUsers
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};
