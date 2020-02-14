import React, { useState, useEffect } from "react";

export const PopularBarberShopContext = React.createContext();

export const PopularBarberShopProvider = props => {
  const [popularShops, setPopularShops] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch BarberShops from Yelp
  const getPopularBarberShops = (lat, lng) => {
    // Assign true to loading
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
        // Once fetch is complete set loading to false
        setLoading(false);
      });
  };

  // Get coordinates on render
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      // Pass coordinates to getPopularBarberShops method to get closet shops
      getPopularBarberShops(latitude, longitude);
    });
  }, []);

  // Update popular shops on render
  useEffect(() => {}, [popularShops]);

  // Make avaliable to other components
  return (
    <PopularBarberShopContext.Provider
      value={{
        popularShops,
        loading
      }}
    >
      {props.children}
    </PopularBarberShopContext.Provider>
  );
};
