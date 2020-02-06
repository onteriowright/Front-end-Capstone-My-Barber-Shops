import React from "react";
import { UserDataProvider } from "../users/UserDataProvider";
import { FavoriteBarberShopProvider } from "../favoriteBarbers/FavoriteBarberProvider";
import { BarberShopProvider } from "../barbers/BarberShopProvider";
import { BarberShopReviewProvider } from "../barberReviews/BarberShopReviewProvider";

export default props => {
  return (
    <BarberShopProvider>
      <BarberShopReviewProvider>
        <UserDataProvider>
          <FavoriteBarberShopProvider>{props.childrens}</FavoriteBarberShopProvider>
        </UserDataProvider>
      </BarberShopReviewProvider>
    </BarberShopProvider>
  );
};
