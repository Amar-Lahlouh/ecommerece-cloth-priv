import { TbMailFilled } from "react-icons/tb";
import "./Header.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import logo from "../../assets/logo66.png";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { useState } from "react";
function Header() {
  const [opensidebar, setopensidebar] = useState(false);
  function changebar() {
    setopensidebar(!opensidebar);
  }
  return (
    <>
      <header className="mt-1 first-header ">
        <div className="">
          <div className=" first p-2">
            <div className="c">
              <p className="trend"> Check out our Trendy Clothe</p>
            </div>
            <div className=" info">
              <div className="d-flex gap-2">
                <span>
                  <TbMailFilled />
                </span>
                <span className="email-header">ecommerce@gmail.com</span>
              </div>
              <div className="d-flex gap-2">
                <span>
                  <BsFillTelephonePlusFill />
                </span>
                <span className="phone-header">+0018379438</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-two">
        <div className="">
          <div className="header-two-flex">
            <div className="c logo ">
              <Link to={"/"}>
                {" "}
                <img src={logo} alt="" />
              </Link>
            </div>

            {/* <div className=" links2">
              <Link to={"login"}>
                <VscAccount size={25} />
                <span className="mx-2 data-header">Account</span>
              </Link>
              <Link to={"cart"}>
                <PiShoppingCartSimpleBold size={25} />
                <span className="mx-2 data-header">Cart</span>
              </Link>
            </div> */}
            <div className=" bars">
              <div className=" searchBar " onClick={changebar}>
                {opensidebar ? (
                  <ImCross size={20} />
                ) : (
                  <FaBarsStaggered size={30} />
                )}
              </div>
            </div>
            <div className={opensidebar ? "Links responsive" : " Links"}>
              {}

              <Link to={"/"} onClick={changebar}>
                {" "}
                Home
              </Link>
              <Link to={"shop"} onClick={changebar}>
                Shop
              </Link>

              <Link to={"About"} onClick={changebar}>
                About
              </Link>
              <Link to={"Contact"} onClick={changebar}>
                Contact
              </Link>

              <Link to={"login"} onClick={changebar}>
                Account
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
