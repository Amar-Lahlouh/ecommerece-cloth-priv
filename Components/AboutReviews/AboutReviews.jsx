import "./AboutReviews.css";
import AboutData from "../../Data/AboutData";
import AboutCard from "../AboutCard/AboutCard";
function AboutReviews() {
  return (
    <>
      <div className="about-reviews">
        <h3>About Our Customers</h3>
        <p>Our customers never miss a bit on providing feedback</p>
      </div>
      <div className="row card-data">
        {AboutData.map((product) => {
          return (
            <AboutCard
              key={product.id}
              name={product.name}
              data={product.data}
              image={product.image}
            />
          );
        })}
      </div>
    </>
  );
}

export default AboutReviews;
