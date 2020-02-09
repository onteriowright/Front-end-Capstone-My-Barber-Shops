import React, { useContext } from "react";
import { BarberReviewContext } from "../barberReviews/BarberShopReviewProvider";

export default ({ props, favoriteBarberShopsReviews }) => {
  const { deleteBarberReviews } = useContext(BarberReviewContext);

  return (
    <>
      <section className="barberReviewCards">
        <div className="barberCardInfo">{favoriteBarberShopsReviews.reviews}</div>
        <div>Created: {favoriteBarberShopsReviews.dateCreated}</div>
        <div className="form-btns review-btns">
          <button className="btn btn-dark btn-sm" onClick={() => props.history.push(`/favoriteBarberShops/edit/${favoriteBarberShopsReviews.id}`)}>
            Edit Review
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this review?")) {
                deleteBarberReviews(favoriteBarberShopsReviews).then(() => props.history.push("/shopReviews"));
              }
            }}
          >
            Delete Review
          </button>
        </div>
      </section>
    </>
  );
};
