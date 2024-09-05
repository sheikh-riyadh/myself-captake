import Product from "../../../components/Main/SingleProduct/Product";
import Tabs from "../../../components/Main/SingleProduct/Tabs/Tabs";
import MainHeader from "../../../layout/Main/Header/MainHeader";

const SingleProduct = () => {
  return (
    <div>
      <div>
        <MainHeader />
        <Product />
      </div>
      <div className="my_container">
        <Tabs />
      </div>
    </div>
  );
};

export default SingleProduct;
