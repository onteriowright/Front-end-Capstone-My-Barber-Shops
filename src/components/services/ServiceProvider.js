import React, { useState, useEffect } from "react";

export const ServicesContext = React.createContext();

export const ServicesDataProvider = props => {
  const [services, setServices] = useState([]);

  // Fetch states from DB
  const getServices = () => {
    return fetch("http://localhost:5000/services")
      .then(res => res.json())
      .then(setServices);
  };

  // Get states on render
  useEffect(() => {
    getServices();
  }, []);

  // Update states array on render
  useEffect(() => {}, [services]);

  // Make avaliable to other components
  return (
    <ServicesContext.Provider
      value={{
        services
      }}
    >
      {props.children}
    </ServicesContext.Provider>
  );
};
