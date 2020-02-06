import React, { useContext, useRef } from "react";
import { BarberShopContext } from "./BarberShopProvider";
import { StatesContext } from "../states/StateDataProvider";

export default props => {
  const { getBarberShops } = useContext(BarberShopContext);
  const { states } = useContext(StatesContext);

  const shopName = useRef("");
  const stateName = useRef("");

  return (
    <form className="taskForm">
      <h2 className="taskForm__title">Search Barbers By Location</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">City: </label>
          <input type="text" name="name" required autoFocus className="form-control" proptype="varchar" placeholder="Enter City" ref={shopName} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="shopLocationId">State: </label>
          <select name="shopLocationId" ref={stateName} className="form-control" proptype="int">
            <option value="0">Select a state</option>
            {states.map(state => (
              <option key={state.id} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={evt => {
          evt.preventDefault();
          getBarberShops(shopName.current.value, stateName.current.value).then(() => props.history.push("/"));
        }}
        className="btn btn-primary">
        Search
      </button>
    </form>
  );
};
