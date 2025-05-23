import React from "react";

const ProductItem = (props) => {
  return (
    <>
      <div>Product Item</div>
      <div>{props.namaProduk}</div>
      <div>{props.harga}</div>
      <div>{props.deskripsi}</div>
    </>
  );
};

export default ProductItem;
