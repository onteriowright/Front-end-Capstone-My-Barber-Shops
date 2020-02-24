import React from "react";
import { Route } from "react-router-dom";
import MainProvider from "./providers/MainProvider";
import BarberList from "./barbers/BarberList";
import FavoriteBarberList from "./favoriteBarbers/FavoriteBarberList";
import BarberForm from "./barbers/BarberForm";
import BarberShopReviewForm from "./barberReviews/BarberShopReviewForm";
import "./barbers/Barber.css";
import BarberShopReviewsList from "./barberReviews/BarberShopReviewsList";

export default props => {
  return (
    <MainProvider>
      <Route
        exact
        path="/"
        render={props => {
          return (
            <>
              <section>
                <div className="barberShopContainer">
                  <BarberForm {...props} />
                </div>
                <div className="barbershopListContainer barberListColor">
                  <BarberList {...props} />
                </div>
              </section>
            </>
          );
        }}
      />
      <section className="main-content">
        <section className="main-content">
          <Route exact path="/favoriteBarberShops" render={props => <FavoriteBarberList {...props} />} />
        </section>
        <Route exact path="/shopReviews" render={props => <BarberShopReviewsList {...props} />} />
        <Route exact path="/shopReviews/:shopId(\d+)" render={props => <BarberShopReviewsList {...props} />} />
        <section className="reviewForm">
          <Route exact path="/shopReviews/create" render={props => <BarberShopReviewForm {...props} />} />
        </section>
        <section className="reviewForm">
          <Route exact path="/shopReviews/edit/:shopId(\d+)" render={props => <BarberShopReviewForm {...props} />} />
        </section>
      </section>
    </MainProvider>
  );
};
