/* eslint-disable react/prop-types */
import "./TestinomialCard.css";

function TestinomialCard(props) {
  return (
    <div className="testinomial-info">
      <img src={props.image} alt="" className="test-img" />
      <p>{props.data}</p>
    </div>
  );
}

export default TestinomialCard;
