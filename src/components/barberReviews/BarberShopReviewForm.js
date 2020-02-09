import React, { useContext, useState, useEffect, useRef } from "react";
import { BarberReviewContext } from "./BarberShopReviewProvider";

export default props => {
  const { addBarberReviews, barberReviews, editBarberShopReviews } = useContext(BarberReviewContext);

  const [barberReview, setReviews] = useState({});
  const reviewCreated = useRef(null);

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
  }, [barberReviews]);

  const constructNewReviews = () => {
    if (barberReview.name === "") {
      window.alert("Please enter Review");
    } else {
      if (editMode) {
        editBarberShopReviews({
          id: barberReview.id,
          reviews: barberReview.name,
          dateCreated: reviewCreated.current.value,
          userId: parseInt(localStorage.getItem("barber_user"))
        }).then(() => props.history.push("/shopReviews"));
      } else {
        addBarberReviews({
          reviews: barberReview.name,
          dateCreated: reviewCreated.current.value,
          userId: parseInt(localStorage.getItem("barber_user"))
        }).then(() => props.history.push("/shopReviews"));
      }
    }
  };

  return (
    <form className="taskForm">
      <h3 className="taskForm__title">{editMode ? "Update Review" : "Save Review"}</h3>
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
            placeholder="Review"
            defaultValue={barberReview.reviews}
            onChange={handleControlledInputChange}
          ></textarea>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="tasks">Review Date: </label>
          <input type="date" name="date" ref={reviewCreated} required className="form-control" defaultValue={barberReview.dateCreated} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <div className="taskButtonContainer">
        <button
          type="submit"
          onClick={clickEvent => {
            clickEvent.preventDefault();
            constructNewReviews();
          }}
          className="btn btn-primary"
        >
          {editMode ? "Save Updates" : "Save Review"}
        </button>
        <button className="btn btn-light" onClick={() => props.history.push("/shopReviews")}>
          Close
        </button>
      </div>
    </form>
  );
};
