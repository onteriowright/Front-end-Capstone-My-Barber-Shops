import React, { useContext } from "react";
import Barber from "./Barber";
import { BarberShopContext } from "../barbers/BarberShopProvider";

export default props => {
  const { barberShops } = useContext(BarberShopContext);
  const array = barberShops.businesses;

  if (array === undefined) {
    console.log("Still loading");
    return "";
  } else {
    const sortedRatings = array.sort((a, b) => b.rating - a.rating);
    sortedRatings.map(business => <Barber key={business.id} barbershops={business} />);
  }

  return (
    <>
      <div className="">
        <h1 className="listOfBarbersHeading">List Of Local Barbers</h1>
      </div>
      <section className="barberShopList">
        <div className="listOfBarbers">
          {array.map(businesses => (
            <Barber key={businesses.id} props={props} barbershops={businesses} />
          ))}
        </div>
      </section>
    </>
  );
};
