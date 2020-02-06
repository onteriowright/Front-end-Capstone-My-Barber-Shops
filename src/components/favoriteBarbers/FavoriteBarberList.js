import React, { useContext } from "react";
import { FavoriteBarberShopContext } from "../favoriteBarbers/FavoriteBarberProvider";
import FavoriteBarber from "./FavoriteBarber";

export default props => {
  const { favoriteBarberShops } = useContext(FavoriteBarberShopContext);
  // console.log(favoriteBarberShops);

  return (
    <>
      <div>Favorite Barber Shops Go here</div>
      {favoriteBarberShops.map(barbershop => (
        <FavoriteBarber key={barbershop.id} props={props} favoriteBarberShops={barbershop} />
      ))}
      <button onClick={() => props.history.push("/")}>Back</button>
    </>
  );
};
