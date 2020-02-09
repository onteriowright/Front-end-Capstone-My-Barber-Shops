import React, { useContext } from "react";
import { BarberReviewContext } from "../barberReviews/BarberShopReviewProvider";

export default ({ props, favoriteBarberShopsReviews }) => {
  const { deleteBarberReviews } = useContext(BarberReviewContext);

  return (
    <>
      <section className="barberCards">
        <div className="barberCardInfo">{favoriteBarberShopsReviews.reviews}</div>
        <div>Created: {favoriteBarberShopsReviews.dateCreated}</div>
        <button onClick={() => props.history.push(`/favoriteBarberShops/edit/${favoriteBarberShopsReviews.id}`)}>Edit Review</button>
        <button onClick={() => deleteBarberReviews(favoriteBarberShopsReviews).then(() => props.history.push("/shopReviews"))}>Delete Review</button>
      </section>
    </>
  );
};
