import React, { useContext } from "react";
import Barber from "./Barber";
import { BarberShopContext } from "../barbers/BarberShopProvider";
import Loading from "../loading/Loading";
import PopularBarberList from "../popularBarbers/PopularBarberList";

export default props => {
  const { barberShops, loading } = useContext(BarberShopContext);

  const array = barberShops.businesses;

  let sortedRatings = "";

  if (array === undefined) {
    return (
      <>
        <div className="loading">
          <h1>Welcome To My Barber Shops</h1>
          <section className="popularBarberContainer">
            <section className="popularBarbersPositon">
              <PopularBarberList {...props} />
            </section>
          </section>
        </div>
      </>
    );
  } else {
    sortedRatings = array.sort((a, b) => b.rating - a.rating);
  }

  if (loading) {
    return (
      <div className="loading">
        <Loading />
      </div>
    );
  } else {
    return (
      <>
        <div className="listOfBarbersPlacement ">
          <h1 className="listOfBarbersHeading">List Of Local Barbers</h1>
        </div>
        <section className="barberShopList">
          <div className="listOfBarbers">
            {sortedRatings.map(businesses => (
              <Barber key={businesses.id} props={props} barbershops={businesses} />
            ))}
          </div>
        </section>
      </>
    );
  }
};
