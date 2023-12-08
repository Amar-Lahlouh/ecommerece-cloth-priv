import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Sale from "../../Components/Sale/Sale";
import FeatureProduct from "../../Components/FeatureProduct/FeatureProduct";
import Banner from "../../Components/Banner/Banner";
import Testinomials from "../../Components/Testinomials/Testinomials";

function Home() {
  return (
    <>
      <section className=" banner ">
        <div className="">
          <div className="row">
            <div className="banner-details">
              <div className="data">
                {" "}
                <span>Check out our Collection</span>
                <h1>
                  Get Up to 30% Off <br />
                  New Arrivals
                </h1>
                <h3>Best products with best Quality</h3>
                <button className="button-link">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <Hero />
      {/* Feature Products */}
      <div className="feature-products p-5">
        <div className="container-xxl">
          <div className="row feature-part">
            <div className="text-center">
              <h1>Our Featured Products</h1>
              <p>All Weather Modern Designs </p>
            </div>
            <div className="d-flex justify-center-around">
              <FeatureProduct />
            </div>
          </div>
        </div>
      </div>
      {/* Sale */}.
      <Sale />
      <Banner />
      {/* Testinomials */}
      <Testinomials />
    </>
  );
}

export default Home;
