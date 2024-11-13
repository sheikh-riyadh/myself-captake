import { useLocation } from "react-router-dom";
import Product from "../../../components/Main/SingleProduct/Product";
import Tabs from "../../../components/Main/SingleProduct/Tabs/Tabs";
import { smoothScroll } from "../../../utils/scrollToTop";

const SingleProduct = () => {
  smoothScroll();
  const location = useLocation();
  const product = location?.state?.payload;
  return (
    <>
      <div>
        <Product product={product}/>
      </div>
      <div className="my_container">
        <Tabs product={product}/>
      </div>
    </>
  );
};

export default SingleProduct;
