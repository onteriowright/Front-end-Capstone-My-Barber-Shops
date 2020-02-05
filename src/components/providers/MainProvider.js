import React from "react";
import { FavoriteBarberShopProvider } from "../favoriteBarbers/FavoriteBarberProvider";

export default props => {
  return <FavoriteBarberShopProvider>{props.childrens}</FavoriteBarberShopProvider>;
};
