import React, { useState, useEffect } from "react";

export const PopularBarberShopContext = React.createContext();

export const PopularBarberShopProvider = props => {
  const [popularShops, setPopularShops] = useState([]);
  const [popularSalons, setPopularSalons] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch BarberShops from yelp
  const getPopularBarberShops = (lat, lng) => {
    // Assign true to loading
    setLoading(true);

    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?client_id=${process.env.REACT_APP_YELP_CLIENT_ID}&term=barbershops&latitude=${lat}&longitude=${lng}&limit=3`,
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
      .then(setPopularShops)
      .catch(err => err)
      .then(() => {
        // Once fetch is complete set loading to false
        setLoading(false);
      });
  };

  const getPopularSalons = (lat, lng) => {
    // Assign true to loading
    setLoading(true);

    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?client_id=${process.env.REACT_APP_YELP_CLIENT_ID}&term=salons&latitude=${lat}&longitude=${lng}&limit=3`,
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
      .then(setPopularSalons)
      .catch(err => err)
      .then(() => {
        // Once fetch is complete set loading to false
        setLoading(false);
      });
  };

  // Get coordinates on render
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;

        // Pass coordinates to getPopularBarberShops fetch call to get closet shops
        getPopularBarberShops(latitude, longitude);
        getPopularSalons(latitude, longitude);
      });
    }
  }, []);

  // Make avaliable to other components
  return (
    <PopularBarberShopContext.Provider
      value={{
        popularShops,
        popularSalons,
        loading
      }}
    >
      {props.children}
    </PopularBarberShopContext.Provider>
  );
};
