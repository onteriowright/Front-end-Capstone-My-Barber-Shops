import React from "react";

export default ({ locations }) => {
  let starRating = "";

  if (
    locations.rating === 5.0 ||
    locations.rating === 5.1 ||
    locations.rating === 5.2 ||
    locations.rating === 5.3 ||
    locations.rating === 5.4 ||
    locations.rating === 5.5 ||
    locations.rating === 5.6 ||
    locations.rating === 5.7 ||
    locations.rating === 5.8 ||
    locations.rating === 5.9
  ) {
    starRating = (
      <span role="img" aria-label="pic" className="barberCardInfo">
        ⭐⭐⭐⭐⭐
      </span>
    );
  } else if (
    locations.rating === 4.0 ||
    locations.rating === 4.1 ||
    locations.rating === 4.2 ||
    locations.rating === 4.3 ||
    locations.rating === 4.4 ||
    locations.rating === 4.5 ||
    locations.rating === 4.6 ||
    locations.rating === 4.7 ||
    locations.rating === 4.8 ||
    locations.rating === 4.9
  ) {
    starRating = (
      <span role="img" aria-label="pic" className="barberCardInfo">
        ⭐⭐⭐⭐
      </span>
    );
  } else if (
    locations.rating === 3.0 ||
    locations.rating === 3.1 ||
    locations.rating === 3.2 ||
    locations.rating === 3.3 ||
    locations.rating === 3.4 ||
    locations.rating === 3.5 ||
    locations.rating === 3.6 ||
    locations.rating === 3.7 ||
    locations.rating === 3.8 ||
    locations.rating === 3.9
  ) {
    starRating = (
      <span role="img" aria-label="pic" className="barberCardInfo">
        ⭐⭐⭐
      </span>
    );
  } else if (
    locations.rating === 2.0 ||
    locations.rating === 2.1 ||
    locations.rating === 2.2 ||
    locations.rating === 2.3 ||
    locations.rating === 2.4 ||
    locations.rating === 2.5 ||
    locations.rating === 2.6 ||
    locations.rating === 2.7 ||
    locations.rating === 2.8 ||
    locations.rating === 2.9
  ) {
    starRating = (
      <span role="img" aria-label="pic" className="barberCardInfo">
        ⭐⭐
      </span>
    );
  } else if (
    locations.rating === 1.0 ||
    locations.rating === 1.1 ||
    locations.rating === 1.2 ||
    locations.rating === 1.3 ||
    locations.rating === 1.4 ||
    locations.rating === 1.5 ||
    locations.rating === 1.6 ||
    locations.rating === 1.7 ||
    locations.rating === 1.8 ||
    locations.rating === 1.9
  ) {
    starRating = (
      <span role="img" aria-label="pic" className="barberCardInfo">
        ⭐⭐
      </span>
    );
  } else {
    starRating = "Shop Not Yet Rated";
  }

  return (
    <>
      <section className="barberCards-popular">
        <div className="barberCardInfo">
          <p className="shopTitle">{locations.name}</p>
          <div>{starRating}</div>
        </div>

        <div className="barberCardInfo">
          {locations.image_url === "" ? (
            <img
              className="imageSize"
              src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="barbershop"
            />
          ) : (
            <img className="imageSize-popular" src={locations.image_url} alt="barbershop" />
          )}
        </div>
        <div className="barberCardInfo">{locations.location.city}</div>
      </section>
    </>
  );
};
