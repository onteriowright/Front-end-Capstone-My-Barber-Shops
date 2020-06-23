import React, { useContext } from "react";
import { FavoriteBarberShopContext } from "./FavoriteBarberProvider";

export default ({ props, favoriteBarberShops }) => {
  const { deleteFavoriteBarberShop } = useContext(FavoriteBarberShopContext);

  let starRating = "";

  if (
    favoriteBarberShops.rating === 5.0 ||
    favoriteBarberShops.rating === 5.1 ||
    favoriteBarberShops.rating === 5.2 ||
    favoriteBarberShops.rating === 5.3 ||
    favoriteBarberShops.rating === 5.4 ||
    favoriteBarberShops.rating === 5.5 ||
    favoriteBarberShops.rating === 5.6 ||
    favoriteBarberShops.rating === 5.7 ||
    favoriteBarberShops.rating === 5.8 ||
    favoriteBarberShops.rating === 5.9
  ) {
    starRating = (
      <span role="img" aria-label="pic" className="barberCardInfo">
        ⭐⭐⭐⭐⭐
      </span>
    );
  } else if (
    favoriteBarberShops.rating === 4.0 ||
    favoriteBarberShops.rating === 4.1 ||
    favoriteBarberShops.rating === 4.2 ||
    favoriteBarberShops.rating === 4.3 ||
    favoriteBarberShops.rating === 4.4 ||
    favoriteBarberShops.rating === 4.5 ||
    favoriteBarberShops.rating === 4.6 ||
    favoriteBarberShops.rating === 4.7 ||
    favoriteBarberShops.rating === 4.8 ||
    favoriteBarberShops.rating === 4.9
  ) {
    starRating = (
      <span role="img" aria-label="pic" className="barberCardInfo">
        ⭐⭐⭐⭐
      </span>
    );
  } else if (
    favoriteBarberShops.rating === 3.0 ||
    favoriteBarberShops.rating === 3.1 ||
    favoriteBarberShops.rating === 3.2 ||
    favoriteBarberShops.rating === 3.3 ||
    favoriteBarberShops.rating === 3.4 ||
    favoriteBarberShops.rating === 3.5 ||
    favoriteBarberShops.rating === 3.6 ||
    favoriteBarberShops.rating === 3.7 ||
    favoriteBarberShops.rating === 3.8 ||
    favoriteBarberShops.rating === 3.9
  ) {
    starRating = (
      <span role="img" aria-label="pic" className="barberCardInfo">
        ⭐⭐⭐
      </span>
    );
  } else if (
    favoriteBarberShops.rating === 2.0 ||
    favoriteBarberShops.rating === 2.1 ||
    favoriteBarberShops.rating === 2.2 ||
    favoriteBarberShops.rating === 2.3 ||
    favoriteBarberShops.rating === 2.4 ||
    favoriteBarberShops.rating === 2.5 ||
    favoriteBarberShops.rating === 2.6 ||
    favoriteBarberShops.rating === 2.7 ||
    favoriteBarberShops.rating === 2.8 ||
    favoriteBarberShops.rating === 2.9
  ) {
    starRating = (
      <span role="img" aria-label="pic" className="barberCardInfo">
        ⭐⭐
      </span>
    );
  } else if (
    favoriteBarberShops.rating === 1.0 ||
    favoriteBarberShops.rating === 1.1 ||
    favoriteBarberShops.rating === 1.2 ||
    favoriteBarberShops.rating === 1.3 ||
    favoriteBarberShops.rating === 1.4 ||
    favoriteBarberShops.rating === 1.5 ||
    favoriteBarberShops.rating === 1.6 ||
    favoriteBarberShops.rating === 1.7 ||
    favoriteBarberShops.rating === 1.8 ||
    favoriteBarberShops.rating === 1.9
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
          <p className="shopTitle">{favoriteBarberShops.shopName} </p>
          <p>{starRating}</p>
        </div>
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
        <div className="barberCardInfo">
          {favoriteBarberShops.contact === "" ? "Sorry! No phone number provided" : favoriteBarberShops.contact}
        </div>
        <div className="barberCardInfo">{favoriteBarberShops.location}</div>
        <div className="barberCardInfo">
          {favoriteBarberShops.street}, {favoriteBarberShops.cityStateZip}
        </div>

        <button
          className="btn btn-danger btn-sm bottom-btn"
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this shop?")) {
              deleteFavoriteBarberShop(favoriteBarberShops).then(() => props.history.push("/favoriteBarberShops"));
            }
          }}
        >
          Remove Shop
        </button>
      </section>
    </>
  );
};
