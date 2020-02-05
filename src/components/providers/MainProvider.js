import React from "react";
import { UserDataProvider } from "../users/UserDataProvider";
import { FavoriteBarberShopProvider } from "../favoriteBarbers/FavoriteBarberProvider";
import { BarberShopProvider } from "../barbers/BarberShopProvider";
import { BarberReviewProvider } from "../barberReviews/BarberReviewProvider";

export default props => {
  return (
    <BarberReviewProvider>
      <BarberShopProvider>
        <UserDataProvider>
          <FavoriteBarberShopProvider>{props.childrens}</FavoriteBarberShopProvider>
        </UserDataProvider>
      </BarberShopProvider>
    </BarberReviewProvider>
  );
};
