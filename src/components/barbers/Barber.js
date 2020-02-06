import React from "react";

export default ({ barbershops }) => {
  return (
    <>
      <div>Shop Name: {barbershops.name}</div>
      <br />
      <div>Shop Location: {barbershops.location.city}</div>
      <br />
      <div>Shop Rating: {barbershops.rating}</div>
      <br />
    </>
  );
};
