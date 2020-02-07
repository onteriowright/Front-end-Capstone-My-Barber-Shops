import React, { useContext } from "react";
import { FavoriteBarberShopContext } from "../favoriteBarbers/FavoriteBarberProvider";

export default ({ barbershops, props }) => {
  const { addFavoriteBarberShop } = useContext(FavoriteBarberShopContext);

  return (
    <>
      <section className="barberCards">
        <div>Shop Name: {barbershops.name}</div>
        <br />
        <div>Shop Location: {barbershops.location.city}</div>
        <br />
        <div>Shop Rating: {barbershops.rating}</div>
        <div>Shop Is Open: {barbershops.is_closed === false ? "Yes" : "No"}</div>
        <div>
          {barbershops.image_url === "" ? (
            <img
              className="imageSize"
              src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            />
          ) : (
            <img className="imageSize" src={barbershops.image_url} alt="barbershop-image" />
          )}
        </div>
        <div>Contact: {barbershops.display_phone}</div>
        <br />
        <button
          onClick={() =>
            addFavoriteBarberShop({
              shopId: barbershops.id,
              shopName: barbershops.name,
              location: barbershops.location.city,
              rating: barbershops.rating,
              image: barbershops.image_url,
              contact: barbershops.display_phone,
              UserId: parseInt(localStorage.getItem("barber_user"))
            }).then(() => props.history.push("/favoriteBarberShops"))
          }>
          Add Barber
        </button>
      </section>
    </>
  );
};
