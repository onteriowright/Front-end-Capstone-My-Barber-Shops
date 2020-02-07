import React from "react";
import { UserDataProvider } from "../users/UserDataProvider";
import { FavoriteBarberShopProvider } from "../favoriteBarbers/FavoriteBarberProvider";
import { BarberShopProvider } from "../barbers/BarberShopProvider";
import { BarberShopReviewProvider } from "../barberReviews/BarberShopReviewProvider";
import { StatesDataProvider } from "../states/StateDataProvider";

export default props => {
  return (
    <StatesDataProvider>
      <BarberShopProvider>
        <BarberShopReviewProvider>
          <UserDataProvider>
            <FavoriteBarberShopProvider>{props.children}</FavoriteBarberShopProvider>
          </UserDataProvider>
        </BarberShopReviewProvider>
      </BarberShopProvider>
    </StatesDataProvider>
  );
};
