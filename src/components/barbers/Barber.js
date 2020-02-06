import React, { useContext } from "react";
import { BarberShopContext } from "./BarberShopProvider";
import { FavoriteBarberShopContext } from "../favoriteBarbers/FavoriteBarberProvider";
import "./Barber.css";

export default ({ barbershops, props }) => {
  const { barberShops } = useContext(BarberShopContext);
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
          <img className="imageSize" src={barbershops.image_url} alt="BarberShopImage" />
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
