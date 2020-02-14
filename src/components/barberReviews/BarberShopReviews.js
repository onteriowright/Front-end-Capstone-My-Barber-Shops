import React, { useContext } from "react";
import { BarberReviewContext } from "../barberReviews/BarberShopReviewProvider";

export default ({ props, favoriteBarberShopsReviews }) => {
  const { deleteBarberReviews } = useContext(BarberReviewContext);

  const activeUserId = parseInt(localStorage.getItem("barber_user"));

  const date = favoriteBarberShopsReviews.dateCreated.split("-");
  let currentMonth = date[1];
  let currentDate = date[2];
  let currentYear = date[0];

  // eslint-disable-next-line
  switch (currentMonth) {
    case "01":
      currentMonth = "January";
      break;
    case "02":
      currentMonth = "February";
      break;
    case "03":
      currentMonth = "March";
      break;
    case "04":
      currentMonth = "April";
      break;
    case "05":
      currentMonth = "May";
      break;
    case "06":
      currentMonth = "June";
      break;
    case "07":
      currentMonth = "July";
      break;
    case "08":
      currentMonth = "August";
      break;
    case "09":
      currentMonth = "September";
      break;
    case "10":
      currentMonth = "October";
      break;
    case "11":
      currentMonth = "November";
      break;
    case "12":
      currentMonth = "December";
      break;
  }

  if (favoriteBarberShopsReviews.userId === activeUserId) {
    return (
      <>
        <section className="barberReviewCards">
          <div className="barberCardInfo">{favoriteBarberShopsReviews.reviews}</div>
          <div className="InfoBtns">
            <div className="editReviewBtn">
              <button className="btn btn-dark btn-sm reviewsBtn" onClick={() => props.history.push(`/favoriteBarberShops/edit/${favoriteBarberShopsReviews.id}`)}>
                Edit Review
              </button>
            </div>
            <div className="shopInformation">
              <div>
                <span className="shopName">{favoriteBarberShopsReviews.shopName} </span> -- {favoriteBarberShopsReviews.location}
              </div>
              <div>
                {currentMonth} {currentDate}, {currentYear}
              </div>
            </div>
            <div className="form-btns review-btns">
              <div className="deleteReviewBtn">
                <button
                  className="btn btn-danger btn-sm reviewsBtn"
                  onClick={() => {
                    if (window.confirm("Are you sure you want to delete this review?")) {
                      deleteBarberReviews(favoriteBarberShopsReviews).then(() => props.history.push("/shopReviews"));
                    }
                  }}
                >
                  Delete Review
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className="barberReviewCards">
          <div className="barberCardInfo">{favoriteBarberShopsReviews.reviews}</div>
          <div>
            <span className="shopName">{favoriteBarberShopsReviews.shopName}</span> -- {favoriteBarberShopsReviews.location}
          </div>
          <div>
            {currentMonth} {currentDate}, {currentYear}
          </div>

          <div className="form-btns review-btns"></div>
        </section>
      </>
    );
  }
};
