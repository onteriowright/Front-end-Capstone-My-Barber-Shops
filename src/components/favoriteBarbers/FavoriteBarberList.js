import React, { useContext } from "react";
import { FavoriteBarberShopContext } from "../favoriteBarbers/FavoriteBarberProvider";
import FavoriteBarber from "./FavoriteBarber";

export default props => {
  const { favoriteBarberShops } = useContext(FavoriteBarberShopContext);
  const activeUserId = parseInt(localStorage.getItem("barber_user"));
  const favoriteBarberShopsOfActiveUser = favoriteBarberShops.filter(user => user.userId === activeUserId) || {};

  return (
    <>
      <h3>Favorite Barber Shops</h3>
      <section className="barberShopList">
        <div className="listOfBarbers">
          {favoriteBarberShopsOfActiveUser.map(barbershop => (
            <FavoriteBarber key={barbershop.id} props={props} favoriteBarberShops={barbershop} />
          ))}
        </div>
      </section>
    </>
  );
};
