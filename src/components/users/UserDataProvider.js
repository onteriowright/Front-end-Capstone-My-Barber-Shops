import React, { useState, useEffect } from "react";

export const UsersContext = React.createContext();

export const UserDataProvider = props => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    return fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(setUsers);
  };

  const addUsers = user => {
    return fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(user)
    }).then(getUsers);
  };

  const editUsers = userObject => {
    return fetch(`http://localhost:5000/users/${userObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(userObject)
    }).then(getUsers);
  };

  const deleteUsers = userId => {
    return fetch(`http://localhost:5000/user/${userId.id}`, {
      method: "DELETE"
    }).then(getUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    console.log("Users State Changed");
    console.log(users);
  }, [users]);

  return (
    <UsersContext.Provider
      value={{
        users,
        addUsers,
        editUsers,
        deleteUsers
      }}>
      {props.children}
    </UsersContext.Provider>
  );
};
