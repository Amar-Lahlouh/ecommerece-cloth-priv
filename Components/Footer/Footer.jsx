/* eslint-disable react/jsx-no-undef */
import "./Footer.css";
import {
  AiFillFacebook,
  AiFillClockCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import {
  FaRegAddressCard,
  FaInstagramSquare,
  FaPhoneAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import google from "../../assets/google.png";
import app from "../../assets/app.png";
import pay from "../../assets/pay.png";
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container-xxl">
          <div className="footer-flex">
            <div className="d-flex flex-column">
              <h2 className="account mb-3">About</h2>
              <div className="about-details d-flex flex-column">
                <Link className="mb-3">About Us</Link>
                <Link className="mb-3">Delivery</Link>
                <Link className="mb-3">Privacy Policy</Link>
                <Link className="mb-3">Tax Policy</Link>
                <Link className="mb-3">Terms & Conditions</Link>
              </div>
            </div>
            <div className=" d-flex flex-column">
              <h2 className="account mb-3">Contact Us</h2>
              <div className="contact-details">
                <p>
                  <span className="m-2">
                    <FaRegAddressCard size={20} />
                  </span>
                  <span className="address">Address: </span>Italy,Main
                  Street,A10
                </p>
                <p>
                  <span className="m-2">
                    <FaPhoneAlt size={20} />
                  </span>
                  <span className="address">Phone:</span>
                  +1 (873)027302
                </p>
                <p>
                  <div className="address">
                    {" "}
                    <span className="m-2">
                      <AiFillClockCircle size={20} />
                    </span>
                    <span>Hours :</span> from 8am to 7pm
                  </div>
                </p>
                <p>
                  <p>Follow Us</p>
                  <div className="d-flex gap-3">
                    <p className="icon">
                      <FaTwitterSquare size={25} />
                    </p>
                    <p className="icon">
                      <AiFillFacebook size={25} />
                    </p>
                    <p className="icon">
                      <FaInstagramSquare size={25} />
                    </p>
                    <p className="icon">
                      <AiFillLinkedin size={25} />
                    </p>
                  </div>
                </p>
              </div>
            </div>
            <div className=" d-flex flex-column">
              <h2 className="account mb-3">Account</h2>
              <div className="about-details d-flex flex-column">
                <Link className="mb-3">Profile</Link>
                <Link className="mb-3">View Cart</Link>
                <Link className="mb-3">Help</Link>
                <Link className="mb-3">My Whishlist</Link>
                <Link className="mb-3">Coupons</Link>
              </div>
            </div>
            <div className="">
              <h3 className="mb-3 account">Install App</h3>
              <div className="about-details">
                <p>Avaliable on Google PLay Services & App Store</p>
                <img src={google} alt="" className="google mb-3" />
                <img src={app} alt="" className="google  mb-3 mx-2" />
                <p>Payement Methods</p>
                <img src={pay} alt="" className="pay" />
              </div>
            </div>
          </div>
          <hr />
          <div className=" d-flex justify-content-between policy">
            <div className="">
              <p>&copy; Developed by @AmarLahlouh, 2023</p>
            </div>
            <div className=" privacy">
              <Link className="px-4">Privacy Policy</Link>
              <Link>Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
