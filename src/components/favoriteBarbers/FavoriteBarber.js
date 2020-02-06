import React from "react";

export default ({ props, favoriteBarberShops }) => {
  return (
    <>
      <div>{favoriteBarberShops.shopName}</div>
      <div>{favoriteBarberShops.location}</div>
      <div>{favoriteBarberShops.rating}</div>
      <div>
        <img className="imageSize" src={favoriteBarberShops.image} />
      </div>
      <div>{favoriteBarberShops.contact}</div>
    </>
  );
};
