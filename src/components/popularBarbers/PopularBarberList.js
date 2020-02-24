import React, { useContext } from "react";
import { PopularBarberShopContext } from "./PopularBarbersDataProvider";
import Loading from "../loading/Loading";
import PopularBarber from "./PopularBarber";
import PopularSalons from "./PopularSalons";

export default props => {
  const { popularShops, popularSalons } = useContext(PopularBarberShopContext);

  const popularShopsArray = popularShops.businesses;

  const popularSalonsArray = popularSalons.businesses;

  let sortRatingsBarberShops = "";
  let sortedRatingsSalons = "";

  // No shops dicovered nearby
  if (popularShopsArray === undefined || popularSalonsArray === undefined) {
    return (
      <>
        <div className="loading">
          <Loading />
        </div>
      </>
    );
  } else {
    // Sort popular shops based off ratings
    sortRatingsBarberShops = popularShopsArray.sort((a, b) => b.rating - a.rating);
    sortedRatingsSalons = popularSalonsArray.sort((a, b) => b.rating - a.rating);

    // Once shops are discovered display and remove spinner
    return (
      <>
        <h4 className="popularShopHeading">Here are the top shops in your area</h4>
        <section className="listOfBarbers">
          {sortRatingsBarberShops.map(shop => (
            <PopularBarber key={shop.id} props={props} locations={shop} />
          ))}
        </section>
        <section className="listOfBarbers">
          {sortedRatingsSalons.map(shop => (
            <PopularSalons key={shop.id} props={props} salons={shop} />
          ))}
        </section>
      </>
    );
  }
};
