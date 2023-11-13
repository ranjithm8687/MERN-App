import React from "react";
import ProductsSingleCard from "./ProductsSingleCard";

const ProductsCard = ({ products }) => {
  return (
    <div className=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((item) => (
        <ProductsSingleCard key={item._id} products={item} />
      ))}
    </div>
  );
};

export default ProductsCard;
