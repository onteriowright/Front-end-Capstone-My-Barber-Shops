import React, { useState, useEffect } from "react";

export const PopularBarberShopContext = React.createContext();

export const PopularBarberShopProvider = props => {
  const [popularShops, setPopularShops] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPopularBarberShops = (lat, lng) => {
    setLoading(true);
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=barbershop&latitude=${lat}&longitude=${lng}&limit=3`, {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-requestd-with": "xmlhttprequest",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        Authorization: `Bearer ${process.env.REACT_APP_YELP_CLIENT_SECRET}`
      }
    })
      .then(res => res.json())
      .then(setPopularShops)
      .catch(err => err)
      .then(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      // getPopularBarberShops(latitude, longitude);
    });
  }, []);

  return (
    <PopularBarberShopContext.Provider
      value={{
        popularShops,
        getPopularBarberShops,
        loading
      }}
    >
      {props.children}
    </PopularBarberShopContext.Provider>
  );
};
