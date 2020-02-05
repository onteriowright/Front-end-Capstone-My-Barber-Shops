import React, { useContext } from "react";
import { FavoriteBarberShopContext } from "../favoriteBarbers/FavoriteBarberProvider";

export default () => {
  const { favoriteBarberShops } = useContext(FavoriteBarberShopContext);
  console.log(favoriteBarberShops);

  return (
    <>
      <div></div>
      <div></div>
    </>
  );
};
