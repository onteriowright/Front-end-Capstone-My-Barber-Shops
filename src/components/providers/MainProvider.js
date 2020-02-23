import React from "react";
import { UserDataProvider } from "../users/UserDataProvider";
import { FavoriteBarberShopProvider } from "../favoriteBarbers/FavoriteBarberProvider";
import { BarberShopProvider } from "../barbers/BarberShopProvider";
import { BarberShopReviewProvider } from "../barberReviews/BarberShopReviewProvider";
import { StatesDataProvider } from "../states/StateDataProvider";
import { PopularBarberShopProvider } from "../popularBarbers/PopularBarbersDataProvider";
import { ServicesDataProvider } from "../services/ServiceProvider";

// One provider that wraps all providers
export default props => {
  return (
    <ServicesDataProvider>
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
    </ServicesDataProvider>
  );
};
