import React from "react";
import MainProvider from "./providers/MainProvider";
import FavoriteBarberList from "./favoriteBarbers/FavoriteBarberList";

export default props => {
  return (
    <>
      <MainProvider>
        <FavoriteBarberList />
      </MainProvider>
    </>
  );
};
