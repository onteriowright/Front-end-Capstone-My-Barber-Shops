import React from "react";
import MainProvider from "./providers/MainProvider";
import FavoriteBarberList from "./favoriteBarbers/FavoriteBarberList";
import BarberList from "./barbers/BarberList";

export default props => {
  return (
    <>
      <MainProvider>
        <BarberList />
        <FavoriteBarberList />
      </MainProvider>
    </>
  );
};
