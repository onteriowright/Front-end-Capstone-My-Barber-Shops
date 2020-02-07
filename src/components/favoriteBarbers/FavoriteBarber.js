import React, { useContext } from "react";
import { FavoriteBarberShopContext } from "./FavoriteBarberProvider";

export default ({ props, favoriteBarberShops }) => {
  const { deleteFavoriteBarberShop } = useContext(FavoriteBarberShopContext);

  return (
    <>
      <section className="barberCards">
        <div>{favoriteBarberShops.shopName}</div>
        <div>{favoriteBarberShops.location}</div>
        <div>Rating: {favoriteBarberShops.rating}</div>
        <div>
          {favoriteBarberShops.image === "" ? (
            <img
              className="imageSize"
              src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            />
          ) : (
            <img className="imageSize" src={favoriteBarberShops.image} alt="barbershop-image" />
          )}
        </div>
        <div>{favoriteBarberShops.contact}</div>
        {/* <Link to=""></Link> */}
        <button onClick={() => deleteFavoriteBarberShop(favoriteBarberShops).then(() => props.history.push("/favoriteBarberShops"))}>Remove Barber Shop</button>
      </section>
    </>
  );
};
