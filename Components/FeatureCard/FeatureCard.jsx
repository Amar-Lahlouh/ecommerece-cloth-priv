/* eslint-disable react/prop-types */
import "./FeatureCard.css";

function FeatureCard(props) {
  return (
    <div className="">
      <div className="feature-card col-md-3 col-sm-6 m-3 ">
        <img src={props.img} alt="" className="img-feature" />
        <h5>{props.title}</h5>
      </div>
    </div>
  );
}

export default FeatureCard;
