import "./ShopItems.css";
import { PRODUCTS, PRODUCTS1 } from "../../Data/ProductData/ProductData";
import ProductsCard from "../ProductsCard/Products";
function ShopItems() {
  return (
    <>
      <div className="row">
        {[...PRODUCTS, ...PRODUCTS1].map((product) => (
          <ProductsCard
            name={product.name}
            brand={product.brand}
            key={product.id}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}

export default ShopItems;
