import React, { useContext } from "react";
import { FavoriteBarberShopContext } from "../favoriteBarbers/FavoriteBarberProvider";

export default ({ barbershops, props }) => {
  const { addFavoriteBarberShop } = useContext(FavoriteBarberShopContext);

  return (
    <>
      <section className="barberCards">
        <div className="barberCardInfo">
          <h3>{barbershops.name}</h3>
        </div>
        <div className="barberCardInfo">{barbershops.location.city}</div>
        <div className="barberCardInfo">Shop Rated {barbershops.rating}</div>
        <div className="barberCardInfo">
          {barbershops.image_url === "" ? (
            <img
              className="imageSize"
              src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="barbershop"
            />
          ) : (
            <img className="imageSize" src={barbershops.image_url} alt="barbershop" />
          )}
        </div>
        <div className="barberCardInfo">Contact {barbershops.display_phone}</div>
        <div className="barberCardInfo">Address</div>
        <div className="barberCardInfo">{barbershops.location.display_address[0]}</div>
        <div className="barberCardInfo">{barbershops.location.display_address[1]}</div>
        <button
          className="btn btn-primary btn-sm"
          onClick={() =>
            addFavoriteBarberShop({
              shopId: barbershops.id,
              shopName: barbershops.name,
              location: barbershops.location.city,
              rating: barbershops.rating,
              image: barbershops.image_url,
              contact: barbershops.display_phone,
              street: barbershops.location.display_address[0],
              cityStateZip: barbershops.location.display_address[1],
              userId: parseInt(localStorage.getItem("barber_user"))
            }).then(() => props.history.push("/favoriteBarberShops"))
          }
        >
          Add Barber
        </button>
        {/* <a href="">Click</a> */}
      </section>
    </>
  );
};
