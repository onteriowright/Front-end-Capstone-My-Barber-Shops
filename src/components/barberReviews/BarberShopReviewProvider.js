import React, { useState, useEffect } from "react";

export const BarberReviewContext = React.createContext();

export const BarberShopReviewProvider = props => {
  const [barberReviews, setBarberReviews] = useState([]);

  // Fetch reviews form DB
  const getBarberReviews = () => {
    return fetch("http://localhost:5000/barberShopReviews")
      .then(res => res.json())
      .then(setBarberReviews);
  };

  // Add reviews to DB
  const addBarberReviews = reviews => {
    return fetch("http://localhost:5000/BarberShopReviews", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(reviews)
    }).then(getBarberReviews);
  };

  // Edit reviews in DB
  const editBarberShopReviews = barberShopReviewsObject => {
    return fetch(`http://localhost:5000/barberShopReviews/${barberShopReviewsObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(barberShopReviewsObject)
    }).then(getBarberReviews);
  };

  // Delete reviews from DB
  const deleteBarberReviews = barberShopReviews => {
    return fetch(`http://localhost:5000/barberShopReviews/${barberShopReviews.id}`, {
      method: "DELETE"
    }).then(getBarberReviews);
  };

  useEffect(() => {
    // Fetch reviews on render
    getBarberReviews();
  }, []);

  // Update review array on render
  useEffect(() => {}, [barberReviews]);

  // Make avaliable to other components
  return (
    <BarberReviewContext.Provider
      value={{
        barberReviews,
        addBarberReviews,
        editBarberShopReviews,
        deleteBarberReviews
      }}
    >
      {props.children}
    </BarberReviewContext.Provider>
  );
};
