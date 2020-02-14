import React, { useContext, useRef } from "react";
import { BarberShopContext } from "./BarberShopProvider";
import { StatesContext } from "../states/StateDataProvider";

export default props => {
  const { getBarberShops } = useContext(BarberShopContext);
  const { states } = useContext(StatesContext);

  const city = useRef("");
  const state = useRef("");

  return (
    <>
      <form className="barberForm dropdown-backdrop">
        <p className="barberForm__title">Search Barbers By Location</p>
        <fieldset>
          <div className="form-group-lg">
            <input type="text" name="name" required autoFocus className="form-control registerUser" proptype="varchar" placeholder="Enter City" ref={city} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <select name="shopLocationId" ref={state} className="form-control registerUser" proptype="int">
              <option value="0">Select a state</option>
              {states.map(state => (
                <option key={state.id} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <div className="form-btns">
          <button
            type="submit"
            onClick={evt => {
              evt.preventDefault();
              if (city.current.value !== "" && state.current.value !== "0") {
                getBarberShops(city.current.value, state.current.value).then(() => props.history.push("/"));
              } else {
                window.alert("Please enter city and state!");
              }
            }}
            className="btn btn-primary btn-sm"
          >
            Search
          </button>
          <button onClick={() => props.history.push("/shopReviews")} className="btn btn-dark btn-sm">
            View Reviews
          </button>
        </div>
      </form>
    </>
  );
};
