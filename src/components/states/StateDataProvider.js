import React, { useState, useEffect } from "react";

export const StatesContext = React.createContext();

export const StatesDataProvider = props => {
  const [states, setStates] = useState([]);

  // Fetch states from DB
  const getStates = () => {
    return fetch("http://localhost:5000/api/states")
      .then(res => res.json())
      .then(setStates);
  };

  // Get states on render
  useEffect(() => {
    getStates();
  }, []);

  // Update states array on render
  useEffect(() => {}, [states]);

  // Make avaliable to other components
  return (
    <StatesContext.Provider
      value={{
        states
      }}
    >
      {props.children}
    </StatesContext.Provider>
  );
};
