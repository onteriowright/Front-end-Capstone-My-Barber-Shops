import React, { useContext } from "react";
import Barber from "./Barber";
import { BarberShopContext } from "../barbers/BarberShopProvider";

export default () => {
  const { barberShops } = useContext(BarberShopContext);
  const array = barberShops.businesses;

  if (array === undefined) {
    console.log("Still loading");
    return "";
  } else {
    console.log(array);
    array.map(business => <Barber key={business.id} barbershops={business} />);
  }

  return (
    <>
      <div>
        <h1>List Of Local Barbers</h1>
      </div>
      <div>
        {array.map(businesses => (
          <Barber key={businesses.id} barbershops={businesses} />
        ))}
      </div>
    </>
  );
};
