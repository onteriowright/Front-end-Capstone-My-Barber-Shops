import React, { useState, useEffect } from "react";

export const BarberShopContext = React.createContext();

export const BarberShopProvider = props => {
  const [barberShops, setBarberShops] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Barbershop from yelp
  const getBarberShops = (city, state) => {
    // Assign true to loading
    setLoading(true);

    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?client_id=${process.env.REACT_APP_YELP_CLIENT_ID}&term=barbershop&location=${city},${state}&limit=50`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-requestd-with": "xmlhttprequest",
          "Access-Control-Allow-Origin": "http://localhost:3000/",
          Authorization: `Bearer ${process.env.REACT_APP_YELP_CLIENT_SECRET}`
        }
      }
    )
      .then(res => res.json())
      .then(setBarberShops)
      .then(() => {
        // Assign false to loading
        setLoading(false);
      })
      .catch(err => err);
  };

  // Update barbershop array on render
  useEffect(() => {}, [barberShops]);

  // Make avaliable to other components
  return (
    <BarberShopContext.Provider
      value={{
        barberShops,
        getBarberShops,
        loading
      }}
    >
      {props.children}
    </BarberShopContext.Provider>
  );
};
