import React, { useState, useEffect } from "react";

export const FavoriteBarberShopContext = React.createContext();

export const FavoriteBarberShopProvider = props => {
  const [favoriteBarberShops, setFavoriteBarberShops] = useState([]);

  const getFavoriteBarberShops = () => {
    return fetch("http://localhost:5000/favoriteBarberShops")
      .then(res => res.json())
      .then(setFavoriteBarberShops);
  };

  const addFavoriteBarberShop = barbershop => {
    return fetch("http://localhost:5000/favoriteBarberShops", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(barbershop)
    }).then(getFavoriteBarberShops);
  };

  const editFavoriteBarberShop = barbershopObject => {
    return fetch(`http://localhost:5000/favoriteBarberShops/${barbershopObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(barbershopObject)
    }).then(getFavoriteBarberShops);
  };

  const deleteFavoriteBarberShop = barbershopId => {
    return fetch(`http://localhost:5000/favoriteBarberShops/${barbershopId.id}`, {
      method: "DELETE"
    }).then(getFavoriteBarberShops);
  };

  useEffect(() => {
    getFavoriteBarberShops();
  }, []);

  useEffect(() => {
    console.log("Favorites Barber Shop State Changed");
    console.log(favoriteBarberShops);
  }, [favoriteBarberShops]);

  return (
    <FavoriteBarberShopContext.Provider
      value={{
        favoriteBarberShops,
        addFavoriteBarberShop,
        editFavoriteBarberShop,
        deleteFavoriteBarberShop
      }}>
      {props.children}
    </FavoriteBarberShopContext.Provider>
  );
};
