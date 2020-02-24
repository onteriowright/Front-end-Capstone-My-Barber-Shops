import React, { useContext, useState, useEffect, useRef } from "react";
import { BarberReviewContext } from "./BarberShopReviewProvider";
import { FavoriteBarberShopContext } from "../favoriteBarbers/FavoriteBarberProvider";

export default props => {
  const { addBarberReviews, barberReviews, editBarberShopReviews } = useContext(BarberReviewContext);
  const { favoriteBarberShops } = useContext(FavoriteBarberShopContext);

  const [barberReview, setReviews] = useState({});

  const barbershopReview = useRef(null);

  const dateReviewCreated = useRef(null);

  const shopName = useRef(null);

  const shopLocation = useRef(null);

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
    if (barbershopReview.current.value === "") {
      window.alert("Please enter review");
    } else if (shopName.current.value === "0") {
      window.alert("Please select a shop from favorites");
    } else if (dateReviewCreated.current.value === "") {
      window.alert("Please enter date");
    } else if (shopLocation.current.value === "") {
      window.alert("Please enter shop location");
    } else {
      if (editMode) {
        editBarberShopReviews({
          id: barberReview.id,
          reviews: barbershopReview.current.value,
          dateCreated: dateReviewCreated.current.value,
          shopName: shopName.current.value,
          location: shopLocation.current.value,
          userId: parseInt(localStorage.getItem("barber_user"))
        }).then(() => props.history.push("/shopReviews"));
      } else {
        addBarberReviews({
          reviews: barberReview.name,
          dateCreated: dateReviewCreated.current.value,
          shopName: barberReview.barberShop,
          location: shopLocation.current.value,
          userId: parseInt(localStorage.getItem("barber_user"))
        }).then(() => props.history.push("/shopReviews"));
      }
    }
  };

  return (
    <form className="barberForm dropdown-backdrop loginForm">
      <h3 className="barberReviewForm__title">{editMode ? "Update Review" : "Save Review"}</h3>
      <fieldset className="loginForm">
        <div className="form-group">
          <textarea
            type="text"
            name="name"
            ref={barbershopReview}
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
      <fieldset className="loginForm">
        <div className="form-group">
          <select name="barberShop" ref={shopName} className="form-control" proptype="text" value={barberReview.shopName} onChange={handleControlledInputChange}>
            <option value="0">Select a Shop...</option>
            {foundShopReview.map(shop => (
              <option key={shop.id} value={shop.shopName}>
                {shop.shopName}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset className="loginForm">
        <div className="form-group">
          <input
            type="date"
            placeholder="Enter date..."
            name="date"
            ref={dateReviewCreated}
            required
            className="form-control"
            defaultValue={barberReview.dateCreated}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset className="loginForm">
        <input type="text" ref={shopLocation} className="form-control" proptype="varchar" placeholder="Enter Location" defaultValue={barberReview.location} />
      </fieldset>
      <div className="taskButtonContainer">
        <div className="form-btns">
          <button
            type="submit"
            onClick={clickEvent => {
              clickEvent.preventDefault();
              constructNewReviews();
            }}
            className="btn btn-primary btn-sm btn-bottom-review"
          >
            {editMode ? "Save Updates" : "Save Review"}
          </button>
          <button className="btn btn-dark btn-sm btn-bottom-review" onClick={() => props.history.push("/shopReviews")}>
            Close
          </button>
        </div>
      </div>
    </form>
  );
};
