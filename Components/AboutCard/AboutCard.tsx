import React from "react";
import "./AboutCard.css";
interface AboutCardProps {
  image: string;
  name: string;
  data: string;
}
function AboutCard(props: AboutCardProps) {
  return (
    <div className="about-card col-3">
      <img src={props.image} alt="" />
      <h5>{props.name}</h5>

      <p>{props.data}</p>
    </div>
  );
}

export default AboutCard;
