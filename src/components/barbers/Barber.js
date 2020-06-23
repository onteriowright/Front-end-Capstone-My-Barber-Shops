import React, { useContext } from "react";
import { FavoriteBarberShopContext } from "../favoriteBarbers/FavoriteBarberProvider";

export default ({ barbershops, props }) => {
  const { addFavoriteBarberShop } = useContext(FavoriteBarberShopContext);

  let starRating = "";

  if (
    barbershops.rating === 5.0 ||
    barbershops.rating === 5.1 ||
    barbershops.rating === 5.2 ||
    barbershops.rating === 5.3 ||
    barbershops.rating === 5.4 ||
    barbershops.rating === 5.5 ||
    barbershops.rating === 5.6 ||
    barbershops.rating === 5.7 ||
    barbershops.rating === 5.8 ||
    barbershops.rating === 5.9
  ) {
    starRating = (
      <span role="img" aria-label="pic" className="barberCardInfo">
        ⭐⭐⭐⭐⭐
      </span>
    );
  } else if (
    barbershops.rating === 4.0 ||
    barbershops.rating === 4.1 ||
    barbershops.rating === 4.2 ||
    barbershops.rating === 4.3 ||
    barbershops.rating === 4.4 ||
    barbershops.rating === 4.5 ||
    barbershops.rating === 4.6 ||
    barbershops.rating === 4.7 ||
    barbershops.rating === 4.8 ||
    barbershops.rating === 4.9
  ) {
    starRating = (
      <span role="img" aria-label="pic" className="barberCardInfo">
        ⭐⭐⭐⭐
      </span>
    );
  } else if (
    barbershops.rating === 3.0 ||
    barbershops.rating === 3.1 ||
    barbershops.rating === 3.2 ||
    barbershops.rating === 3.3 ||
    barbershops.rating === 3.4 ||
    barbershops.rating === 3.5 ||
    barbershops.rating === 3.6 ||
    barbershops.rating === 3.7 ||
    barbershops.rating === 3.8 ||
    barbershops.rating === 3.9
  ) {
    starRating = (
      <span role="img" aria-label="pic" className="barberCardInfo">
        ⭐⭐⭐
      </span>
    );
  } else if (
    barbershops.rating === 2.0 ||
    barbershops.rating === 2.1 ||
    barbershops.rating === 2.2 ||
    barbershops.rating === 2.3 ||
    barbershops.rating === 2.4 ||
    barbershops.rating === 2.5 ||
    barbershops.rating === 2.6 ||
    barbershops.rating === 2.7 ||
    barbershops.rating === 2.8 ||
    barbershops.rating === 2.9
  ) {
    starRating = (
      <span role="img" aria-label="pic" className="barberCardInfo">
        ⭐⭐
      </span>
    );
  } else if (
    barbershops.rating === 1.0 ||
    barbershops.rating === 1.1 ||
    barbershops.rating === 1.2 ||
    barbershops.rating === 1.3 ||
    barbershops.rating === 1.4 ||
    barbershops.rating === 1.5 ||
    barbershops.rating === 1.6 ||
    barbershops.rating === 1.7 ||
    barbershops.rating === 1.8 ||
    barbershops.rating === 1.9
  ) {
    starRating = (
      <span role="img" aria-label="pic" className="barberCardInfo">
        ⭐⭐
      </span>
    );
  } else {
    starRating = "Shop Not Yet Rated";
  }

  return (
    <>
      <section className="barberCards">
        <div className="barberCardInfo">
          <p className="shopTitle">{barbershops.name}</p>
          <p className="barberCardInfo">{starRating}</p>
        </div>
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
        <div className="barberCardInfo">
          {barbershops.display_phone === "" ? "Sorry! No phone number provided" : barbershops.display_phone}
        </div>
        <div className="barberCardInfo">{barbershops.location.city}</div>
        <div className="barberCardInfo">
          {barbershops.location.display_address[0]}, {barbershops.location.display_address[1]}
        </div>
        <div className="barberCardInfo"></div>
        <button
          className="btn btn-primary btn-sm bottom-btn"
          onClick={() =>
            // create new object and send to DB for favorites
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
          Add Shop
        </button>
      </section>
    </>
  );
};
