import React from "react";
import { UserDataProvider } from "../users/UserDataProvider";
import { FavoriteBarberShopProvider } from "../favoriteBarbers/FavoriteBarberProvider";
import { BarberShopProvider } from "../barbers/BarberShopProvider";
import { BarberShopReviewProvider } from "../barberReviews/BarberShopReviewProvider";
import { StatesDataProvider } from "../states/StateDataProvider";
import { PopularBarberShopProvider } from "../popularBarbers/PopularBarbersDataProvider";

export default props => {
  return (
    <PopularBarberShopProvider>
      <StatesDataProvider>
        <BarberShopProvider>
          <BarberShopReviewProvider>
            <UserDataProvider>
              <FavoriteBarberShopProvider>{props.children}</FavoriteBarberShopProvider>
            </UserDataProvider>
          </BarberShopReviewProvider>
        </BarberShopProvider>
      </StatesDataProvider>
    </PopularBarberShopProvider>
  );
};
