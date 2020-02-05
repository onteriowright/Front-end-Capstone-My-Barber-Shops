import React, { useContext } from "react";
import { BarberShopContext } from "../barbers/BarberShopProvider";

export default () => {
  const { barberShops } = useContext(BarberShopContext);
  console.log(barberShops);

  return (
    <>
      <div></div>
      <div></div>
    </>
  );
};
