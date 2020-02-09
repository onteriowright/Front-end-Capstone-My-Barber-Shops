import React, { useState, useEffect } from "react";

export const BarberShopContext = React.createContext();

export const BarberShopProvider = props => {
  const [barberShops, setBarberShops] = useState([]);

  const getBarberShops = (city, state) => {
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
      .catch(err => err);
  };

  useEffect(() => {
    let city = "";
    let state = "";
    if (city !== "" && state !== "0") {
      getBarberShops(city, state);
    }
  }, []);

  useEffect(() => {
    console.log("Barber Shop State Changed");
    console.log(barberShops);
  }, [barberShops]);

  return (
    <BarberShopContext.Provider
      value={{
        barberShops,
        getBarberShops
      }}
    >
      {props.children}
    </BarberShopContext.Provider>
  );
};
