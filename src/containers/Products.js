import React from "react"; //, { useContext }
// import { useSelector } from 'react-redux';

import ProductItem from "../components/Products/ProductItem";
// import { ProductContext } from "../context/product-context";
import { useStore } from "../hooks-store/store";
import "./Products.css";

const Products = (props) => {
  const state = useStore()[0];
  // console.log(state.products);
  // const productList = useContext(ProductContext).products;
  // const productList = useSelector(state => state.shop.products);
  return (
    <ul className="products-list">
      {state.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
