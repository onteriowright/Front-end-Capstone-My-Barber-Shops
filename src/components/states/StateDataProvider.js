import React, { useState, useEffect } from "react";

export const StatesContext = React.createContext();

export const StatesDataProvider = props => {
  const [states, setStates] = useState([]);

  const getStates = () => {
    return fetch("http://localhost:5000/states")
      .then(res => res.json())
      .then(setStates);
  };

  useEffect(() => {
    getStates();
  }, []);

  useEffect(() => {
    console.log("Statses State Changed");
    // console.log(states);
  }, [states]);

  return (
    <StatesContext.Provider
      value={{
        states
      }}>
      {props.children}
    </StatesContext.Provider>
  );
};
