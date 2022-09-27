import React from "react"; //, { useContext }
// import { useDispatch } from 'react-redux';

import Card from "../UI/Card";
import { useStore } from "../../hooks-store/store";
import "./ProductItem.css";
// import { toggleFav } from '../../store/actions/products';
// import { ProductContext } from "../../context/product-context";

const ProductItem = React.memo((props) => {
  // const dispatch = useDispatch();
  // const toggleFav = useContext(ProductContext).toggleFav;
  console.log("RENDERING");
  const dispatch = useStore(false)[1];
  const toggleFavHandler = () => {
    // dispatch(toggleFav(props.id));
    // toggleFav(props.id);
    dispatch("TOGGLE_FAV", props.id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
