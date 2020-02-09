import React, { useContext } from "react";
import { BarberReviewContext } from "../barberReviews/BarberShopReviewProvider";
import BarberShopReview from "../barberReviews/BarberShopReviews";

export default props => {
  const { barberReviews } = useContext(BarberReviewContext);
  const activeUserId = parseInt(localStorage.getItem("barber_user"));
  const barberShopsReviewsOfActiveUser = barberReviews.filter(user => user.userId === activeUserId) || {};

  return (
    <>
      <h3>Barber Shops</h3>
      <button className="btn btn-primary btn-sm" onClick={() => props.history.push("/favoriteBarberShops/create")}>
        Create Review
      </button>
      <section className="barberShopList">
        <div className="listOfBarbers">
          {barberShopsReviewsOfActiveUser.map(barbershop => (
            <BarberShopReview key={barbershop.id} props={props} favoriteBarberShopsReviews={barbershop} />
          ))}
        </div>
      </section>
    </>
  );
};
