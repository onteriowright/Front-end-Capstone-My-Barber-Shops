import React, { useState, useEffect } from "react";

export const BarberShopContext = React.createContext();

export const BarberShopProvider = props => {
  const [barberShops, setBarberShops] = useState([]);

  const getBarberShops = (city, state) => {
    return fetch(`https://api.yelp.com/v3/businesses/search?term=barbershop&location=${city},${state}`, {
      headers: {
        Authorization: "Bearer Z_PpZkY2dOmPoMSaLV974sw1Ud9xAYPxbhB2fJoLZsWbsmoPOI9SRt9RRjx9DjatF-trQdrC4_08cOWexWZlHGnYc5CcBURWbd41JWeKb1vMM9esA9Jg8lEo3605XnYxs"
      }
    })
      .then(res => res.json())
      .then(setBarberShops);
  };

  useEffect(() => {
    getBarberShops(city, state);
  }, []);

  useEffect(() => {
    console.log("Barber Shop State Changed");
    console.log(barberShops);
  }, [barberShops]);

  return (
    <BarberContext.Provider
      value={{
        barberShops,
        getBarberShops
      }}>
      {props.children}
    </BarberContext.Provider>
  );
};
