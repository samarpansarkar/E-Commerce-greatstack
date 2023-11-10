import React, { useContext } from "react";
import all_product from "./../Components/Assets/all_product";
import { ShopContext } from "./../Context/ShopContext";
import { useParams } from "react-router-dom";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return <div>
    
  </div>;
};

export default Product;
