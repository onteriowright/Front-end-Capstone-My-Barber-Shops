import React, { useContext } from "react";
import { PopularBarberShopContext } from "./PopularBarbersDataProvider";
import Loading from "../loading/Loading";
import PopularBarber from "./PopularBarber";

export default props => {
  const { popularShops } = useContext(PopularBarberShopContext);

  const popularArray = popularShops.businesses;

  if (popularArray === undefined) {
    return (
      <>
        <div className="loading">
          <Loading />
        </div>
      </>
    );
  } else {
    return (
      <section className="listOfBarbers">
        {popularArray.map(shop => (
          <PopularBarber key={shop.id} props={props} locations={shop} />
        ))}
      </section>
    );
  }
};
