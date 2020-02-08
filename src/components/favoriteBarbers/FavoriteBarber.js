import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { FavoriteBarberShopContext } from "./FavoriteBarberProvider";
// import { BarberReviewContext } from "../barberReviews/BarberShopReviewProvider";

export default ({ props, favoriteBarberShops }) => {
  const { deleteFavoriteBarberShop } = useContext(FavoriteBarberShopContext);
  // const { barberReviews } = useContext(BarberReviewContext);
  // console.log(barberReviews);

  return (
    <>
      <section className="barberCards">
        <div className="barberCardInfo">
          <h3>{favoriteBarberShops.shopName}</h3>
        </div>
        <div className="barberCardInfo">{favoriteBarberShops.location}</div>
        <div className="barberCardInfo">Rating: {favoriteBarberShops.rating}</div>
        <div className="barberCardInfo">
          {favoriteBarberShops.image === "" ? (
            <img
              className="imageSize"
              src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="barbershop"
            />
          ) : (
            <img className="imageSize" src={favoriteBarberShops.image} alt="barbershop" />
          )}
        </div>
        <div className="barberCardInfo">Contact {favoriteBarberShops.contact}</div>
        <div className="barberCardInfo">Address</div>
        <div className="barberCardInfo">{favoriteBarberShops.street}</div>
        <div className="barberCardInfo">{favoriteBarberShops.cityStateZip}</div>
        <button onClick={() => props.history.push("/favoriteBarberShops/create")}>Add review</button>
        <br />
        <button onClick={() => deleteFavoriteBarberShop(favoriteBarberShops).then(() => props.history.push("/favoriteBarberShops"))}>Remove Barber Shop</button>
      </section>
    </>
  );
};
