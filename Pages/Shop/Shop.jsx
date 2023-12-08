import "./Shop.css";
import "../../Components/Email/Email";
import ShopItems from "../../Components/ShopItems/ShopItems";
import Email from "../../Components/Email/Email";
function Shop() {
  return (
    <>
      <div className="sale-part shop">
        <h5>
          <span>#100% </span>Off on All Products
        </h5>
        <p>Buy Now and we Will Deliever wherever you are</p>
      </div>

      <section className="shop-products p-5">
        <div className="container">
          <div className="row">
            <ShopItems />
          </div>
        </div>
      </section>
      <Email />
    </>
  );
}

export default Shop;
