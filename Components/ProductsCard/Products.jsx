/* eslint-disable react/prop-types */

import "./ProductsCard.css";
import ReactStars from "react-rating-stars-component";

function ProductsCard(props) {
  return (
    <div className="col-md-3 col-sm-4 product-card">
      <div className="">
        <img src={props.image} alt="" />
        <div className="card-detials  p-3">
          <span>{props.brand}</span>
          <p>{props.name}</p>
          <ReactStars count={5} value={4} size={24} activeColor="#ffd700" />
          <p className="price">
            <hr />
            <span> {props.price}$</span>
            <strike>{props.price * 2.5} $</strike>
          </p>
          <div className="buttons d-flex justify-content-between"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
