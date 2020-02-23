import React, { useContext, useRef } from "react";
import { BarberShopContext } from "./BarberShopProvider";
import { StatesContext } from "../states/StateDataProvider";
import { ServicesContext } from "../services/ServiceProvider";

export default props => {
  const { getBarberShops } = useContext(BarberShopContext);
  const { states } = useContext(StatesContext);
  const { services } = useContext(ServicesContext);

  const city = useRef("");
  const state = useRef("");
  const service = useRef("");

  return (
    <>
      <form className="barberForm dropdown-backdrop">
        <p className="barberForm__title">Search For Shops...</p>
        <fieldset>
          <div className="form-group-lg">
            <input type="text" name="name" required autoFocus className="form-control registerUser" proptype="varchar" placeholder="Enter City" ref={city} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <select name="shopLocation" ref={state} className="form-control registerUser" proptype="int">
              <option value="0">Select a state</option>
              {states.map(state => (
                <option key={state.id} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <select name="service" ref={service} className="form-control registerUser" proptype="int">
              <option value="0">Select service</option>
              {services.map(service => (
                <option key={service.id} value={service.name}>
                  {service.name}
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
              if (city.current.value !== "" && state.current.value !== "0" && service.current.value !== "0") {
                // Fetch barbershops with city and state
                const capitalizeFirstLetterOfCity = word => {
                  word = word.split(" ");
                  for (let i = 0; i < word.length; i++) {
                    word[i] = word[i][0].toUpperCase() + word[i].slice(1);
                  }

                  word = word.join(" ");
                  return word;
                };

                getBarberShops(capitalizeFirstLetterOfCity(city.current.value), state.current.value, service.current.value).then(() => props.history.push("/"));
              } else {
                window.alert("Please fill out all fields!");
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
