import Product from "../../../components/Main/SingleProduct/Product";
import Tabs from "../../../components/Main/SingleProduct/Tabs/Tabs";
import { smoothScroll } from "../../../utils/scrollToTop";

const SingleProduct = () => {
    smoothScroll();
  return (
    <div>
      <div>
        <Product />
      </div>
      <div className="my_container">
        <Tabs />
      </div>
    </div>
  );
};

export default SingleProduct;
