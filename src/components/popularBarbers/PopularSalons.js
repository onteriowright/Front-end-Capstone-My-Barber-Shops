import React from "react";

export default ({ salons }) => {
  return (
    <>
      <section className="barberCards-popular">
        <div className="barberCardInfo">
          <p className="shopTitle">{salons.name}</p>
          <div>{salons.rating} Stars</div>
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
