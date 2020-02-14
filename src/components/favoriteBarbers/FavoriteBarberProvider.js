import React, { useState, useEffect } from "react";

export const FavoriteBarberShopContext = React.createContext();

export const FavoriteBarberShopProvider = props => {
  const [favoriteBarberShops, setFavoriteBarberShops] = useState([]);

  // Fetch favorites from DB
  const getFavoriteBarberShops = () => {
    return fetch("http://localhost:5000/favoriteBarberShops")
      .then(res => res.json())
      .then(setFavoriteBarberShops);
  };

  // Add favorites to DB
  const addFavoriteBarberShop = barbershop => {
    return fetch("http://localhost:5000/favoriteBarberShops", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(barbershop)
    }).then(getFavoriteBarberShops);
  };

  // Edit favorites from DB
  const editFavoriteBarberShop = barbershopObject => {
    return fetch(`http://localhost:5000/favoriteBarberShops/${barbershopObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(barbershopObject)
    }).then(getFavoriteBarberShops);
  };

  // Delete favorites from DB
  const deleteFavoriteBarberShop = barbershopId => {
    return fetch(`http://localhost:5000/favoriteBarberShops/${barbershopId.id}`, {
      method: "DELETE"
    }).then(getFavoriteBarberShops);
  };

  // Fetch favorite shops on render
  useEffect(() => {
    getFavoriteBarberShops();
  }, []);

  // Update favorites array on render
  useEffect(() => {}, [favoriteBarberShops]);

  // Make avaliable to other components
  return (
    <FavoriteBarberShopContext.Provider
      value={{
        favoriteBarberShops,
        addFavoriteBarberShop,
        editFavoriteBarberShop,
        deleteFavoriteBarberShop
      }}
    >
      {props.children}
    </FavoriteBarberShopContext.Provider>
  );
};
