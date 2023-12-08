import "./FeatureProduct.css";
import FeatureData from "../../Data/FeatureData/Products";
function FeatureProduct() {
  return (
    <>
      <div className=" row data-fet container">
        {FeatureData.map((product) => (
          <div
            className="col-md-3 col-sm-6  mt-4 card-feature"
            key={product.id}
          >
            <img src={product.image} alt="" className="feature-photo" />
            <p className="feat-name">{product.name}</p>
            <p className="sale">50% Off</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeatureProduct;
