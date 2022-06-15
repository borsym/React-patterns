import React from "react";

export const SmallproductListItem = ({ product }) => {
  const { name, price } = product;
  return (
    <h3>
      {name} - {price}
    </h3>
  );
};
