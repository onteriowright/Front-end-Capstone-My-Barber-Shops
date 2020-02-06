import React, { useState, useEffect } from "react";

export const BarberReviewContext = React.createContext();

export const BarberShopReviewProvider = props => {
  const [barberReviews, setBarberReviews] = useState([]);

  const getBarberReviews = () => {
    return fetch("http://localhost:5000/barberShopReviews")
      .then(res => res.json())
      .then(setBarberReviews);
  };

  const addBarberReviews = reviews => {
    return fetch("http://localhost:5000/BarberShopReviews", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(reviews)
    }).then(getBarberReviews);
  };

  const editBarberShopReviews = barberShopReviewsObject => {
    return fetch(`http://localhost:5000/barberShopReviews/${barberShopReviewsObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(barberShopReviewsObject)
    }).then(getBarberReviews);
  };

  const deleteBarberReviews = barberShopReviews => {
    return fetch(`http://localhost:5000/barberShopReviews/${barberShopReviews.id}`, {
      method: "DELETE"
    }).then(getBarberReviews);
  };

  useEffect(() => {
    getBarberReviews();
  }, []);

  useEffect(() => {
    console.log("Favorites Barber Shop State Changed");
    console.log(barberReviews);
  }, [barberReviews]);

  return (
    <BarberReviewContext.Provider
      value={{
        barberReviews,
        addBarberReviews,
        editBarberShopReviews,
        deleteBarberReviews
      }}>
      {props.children}
    </BarberReviewContext.Provider>
  );
};
