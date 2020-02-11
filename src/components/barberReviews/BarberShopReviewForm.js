import React, { useContext, useState, useEffect, useRef } from "react";
import { BarberReviewContext } from "./BarberShopReviewProvider";
import { FavoriteBarberShopContext } from "../favoriteBarbers/FavoriteBarberProvider";

export default props => {
  const { addBarberReviews, barberReviews, editBarberShopReviews } = useContext(BarberReviewContext);
  const { favoriteBarberShops } = useContext(FavoriteBarberShopContext);

  const [barberReview, setReviews] = useState({});

  const reviewCreated = useRef(null);

  const activeUserId = parseInt(localStorage.getItem("barber_user"));

  const foundShopReview = favoriteBarberShops.filter(shop => shop.userId === activeUserId);

  const editMode = props.match.params.hasOwnProperty("shopId");

  const handleControlledInputChange = event => {
    /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
    const newReview = Object.assign({}, barberReview);
    newReview[event.target.name] = event.target.value;
    setReviews(newReview);
  };

  const setDefaults = () => {
    if (editMode) {
      const reviewId = parseInt(props.match.params.shopId);
      const selectedReview = barberReviews.find(singleReview => singleReview.id === reviewId) || {};
      setReviews(selectedReview);
    }
  };

  useEffect(() => {
    setDefaults();
    // eslint-disable-next-line
  }, [barberReviews]);

  const constructNewReviews = () => {
    if (barberReview.name === "") {
      console.log(barberReview.name);
      window.alert("Please enter Review");
    } else {
      if (editMode) {
        editBarberShopReviews({
          id: barberReview.id,
          reviews: barberReview.name,
          dateCreated: reviewCreated.current.value,
          shopName: barberReview.barberShop,
          userId: parseInt(localStorage.getItem("barber_user"))
        }).then(() => props.history.push("/shopReviews"));
      } else {
        addBarberReviews({
          reviews: barberReview.name,
          dateCreated: reviewCreated.current.value,
          shopName: barberReview.barberShop,
          userId: parseInt(localStorage.getItem("barber_user"))
        }).then(() => props.history.push("/shopReviews"));
      }
    }
  };

  return (
    <form className="barberForm dropdown-backdrop">
      <h3 className="barberReviewForm__title">{editMode ? "Update Review" : "Save Review"}</h3>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Review </label>
          <textarea
            type="text"
            name="name"
            required
            autoFocus
            cols="40"
            rows="5"
            className="form-control"
            proptype="varchar"
            placeholder="Enter review"
            defaultValue={barberReview.reviews}
            onChange={handleControlledInputChange}
          ></textarea>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="barberShop">Location: </label>
          <select name="barberShop" className="form-control" proptype="text" value={barberReview.shopName} onChange={handleControlledInputChange}>
            <option value="0">Select a Barbershop</option>
            {foundShopReview.map(shop => (
              <option key={shop.id} value={shop.shopName}>
                {shop.shopName}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="tasks">Review Date: </label>
          <input type="date" name="date" ref={reviewCreated} required className="form-control" defaultValue={barberReview.dateCreated} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <div className="taskButtonContainer">
        <div className="form-btns">
          <button
            type="submit"
            onClick={clickEvent => {
              clickEvent.preventDefault();
              constructNewReviews();
            }}
            className="btn btn-primary btn-sm"
          >
            {editMode ? "Save Updates" : "Save Review"}
          </button>
          <button className="btn btn-dark btn-sm" onClick={() => props.history.push("/shopReviews")}>
            Close
          </button>
        </div>
      </div>
    </form>
  );
};