import React, { useContext } from "react";
import { ShopContext } from "./../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return <div>
    <Breadcrum product = {product}/>
    <ProductDisplay product={product}/>
    <DescriptionBox/>
  </div>;
};

export default Product;
