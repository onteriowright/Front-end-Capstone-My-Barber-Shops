import React, { useState, useEffect } from "react";
export const BarberShopContext = React.createContext();

export const BarberShopProvider = props => {
  const [barberShops, setBarberShops] = useState([]);
  let city = "";
  let state = "";
  const getBarberShops = (city, state) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=barbershop&location=${city},${state}&limit=50`, {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-requestd-with": "xmlhttprequest",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        Authorization: "Bearer Z_PpZkY2dOmPoMSaLV974sw1Ud9xAYPxbhB2fJoLZsWbsmoPOI9SRt9RRjx9DjatF-trQdrC4_08cOWexWZlHGnYc5CcBURWbd41JWeKb1vMM9esA9Jg8lEo3605XnYx"
      }
    })
      .then(res => res.json())
      .then(setBarberShops);
  };

  useEffect(() => {
    if (city !== "" && state !== "") {
      getBarberShops(city, state);
    }
  }, []);

  useEffect(() => {
    console.log("Barber Shop State Changed");
  }, [barberShops]);

  return (
    <BarberShopContext.Provider
      value={{
        barberShops,
        getBarberShops
      }}>
      {props.children}
    </BarberShopContext.Provider>
  );
};
