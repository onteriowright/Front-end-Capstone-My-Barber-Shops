import React from "react";

export default ({ locations }) => {
  return (
    <>
      <section className="barberCards-popular">
        <div className="barberCardInfo">
          <p className="shopTitle">{locations.name}</p>
          <div>{locations.rating} Stars</div>
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
