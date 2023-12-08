import icon1 from "../../assets/coin'.png";
import icon2 from "../../assets/serv4.png";
import icon3 from "../../assets/serv3.png";
import icon4 from "../../assets/serv1.jpg";
import FeatureCard from "../FeatureCard/FeatureCard";
import "./Hero.css";
function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container-xxl">
          <div className="hero-details">
            <h2 className="hero-title"> Our Features</h2>
            <div className=" features-data">
              <FeatureCard title={"Online Order"} img={icon2} />
              <FeatureCard title={"Quality Assurance"} img={icon3} />
              <FeatureCard title={"Offers & Discounts"} img={icon1} />
              <FeatureCard title={"Free Delivery"} img={icon4} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
