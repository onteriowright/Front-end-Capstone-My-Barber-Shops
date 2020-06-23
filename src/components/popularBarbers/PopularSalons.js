import React from "react";

export default ({ salons }) => {
  let starRating = "";

  if (
    salons.rating === 5.0 ||
    salons.rating === 5.1 ||
    salons.rating === 5.2 ||
    salons.rating === 5.3 ||
    salons.rating === 5.4 ||
    salons.rating === 5.5 ||
    salons.rating === 5.6 ||
    salons.rating === 5.7 ||
    salons.rating === 5.8 ||
    salons.rating === 5.9
  ) {
    starRating = (
      <span role="img" aria-label="pic" className="barberCardInfo">
        ⭐⭐⭐⭐⭐
      </span>
    );
  } else if (
    salons.rating === 4.0 ||
    salons.rating === 4.1 ||
    salons.rating === 4.2 ||
    salons.rating === 4.3 ||
    salons.rating === 4.4 ||
    salons.rating === 4.5 ||
    salons.rating === 4.6 ||
    salons.rating === 4.7 ||
    salons.rating === 4.8 ||
    salons.rating === 4.9
  ) {
    starRating = (
      <span role="img" aria-label="pic" className="barberCardInfo">
        ⭐⭐⭐⭐
      </span>
    );
  } else if (
    salons.rating === 3.0 ||
    salons.rating === 3.1 ||
    salons.rating === 3.2 ||
    salons.rating === 3.3 ||
    salons.rating === 3.4 ||
    salons.rating === 3.5 ||
    salons.rating === 3.6 ||
    salons.rating === 3.7 ||
    salons.rating === 3.8 ||
    salons.rating === 3.9
  ) {
    starRating = (
      <span role="img" aria-label="pic" className="barberCardInfo">
        ⭐⭐⭐
      </span>
    );
  } else if (
    salons.rating === 2.0 ||
    salons.rating === 2.1 ||
    salons.rating === 2.2 ||
    salons.rating === 2.3 ||
    salons.rating === 2.4 ||
    salons.rating === 2.5 ||
    salons.rating === 2.6 ||
    salons.rating === 2.7 ||
    salons.rating === 2.8 ||
    salons.rating === 2.9
  ) {
    starRating = (
      <span role="img" aria-label="pic" className="barberCardInfo">
        ⭐⭐
      </span>
    );
  } else if (
    salons.rating === 1.0 ||
    salons.rating === 1.1 ||
    salons.rating === 1.2 ||
    salons.rating === 1.3 ||
    salons.rating === 1.4 ||
    salons.rating === 1.5 ||
    salons.rating === 1.6 ||
    salons.rating === 1.7 ||
    salons.rating === 1.8 ||
    salons.rating === 1.9
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
          <p className="shopTitle">{salons.name}</p>
          <div>{starRating}</div>
        </div>

        <div className="barberCardInfo">
          {salons.image_url === "" ? (
            <img
              className="imageSize"
              src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="barbershop"
            />
          ) : (
            <img className="imageSize-popular" src={salons.image_url} alt="barbershop" />
          )}
        </div>
        <div className="barberCardInfo">{salons.location.city}</div>
      </section>
    </>
  );
};
