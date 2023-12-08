import "./Banner.css";
import b1 from "../../assets/b1.jpg";
import b2 from "../../assets/b22.jpg";
function Banner() {
  return (
    <div>
      <div className=" banner-info container">
        <div className=" first-banner">
          <div className="">
            <img src={b1} alt="" />

            <div className=" banner-sale">
              <p>Hot Deals</p>
              <h4>Buy One get One free</h4>
              <p>
                The latest best collection in our closet.
                <p>Feel Cute with our outfits</p>
              </p>
              <button className="button-link">Learn More</button>
            </div>
          </div>
        </div>
        <div className=" first-banner">
          <div className="">
            <img src={b2} alt="" />

            <div className=" banner-sale">
              <p>New Arrivals</p>
              <h5> Fashion Collection 2023</h5>
              <p>Everything you think of is available here!</p>
              <button className="learn-button button-link">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
