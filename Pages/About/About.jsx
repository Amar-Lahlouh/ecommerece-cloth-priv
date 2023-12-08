import "./About.css";
import a1 from "../../assets/images/products/a6.jpg";
import AboutReviews from "../../Components/AboutReviews/AboutReviews";

function About() {
  return (
    <>
      <div className="about">
        <h4>#Know Us</h4>
        <p>Get to know us More</p>
      </div>

      <div className="about-data">
        <div className="about-photo">
          <img src={a1} alt="" />
        </div>
        <div className="about-detials">
          <h3>Who we Are?</h3>
          <p>
            Welcome to Fashion Flair your go-to destination for fashion that's
            as unique as you are! Discover a curated collection of trendsetting
            pieces, from casual essentials to statement-making outfits. Find
            your style stride with quality fabrics and fashion-forward designs
            that elevate every moment. Ready to redefine your wardrobe? Let's
            get started!
          </p>
        </div>
      </div>

      <AboutReviews />
    </>
  );
}

export default About;
