import StoreBanner from "../../../components/Main/Store/StoreBanner";
import StoreCard from "../../../components/Main/Store/StoreCard";

const Store = () => {
  return (
    <section>
      <div className="my_container mt-[68px] lg:mt-28 xl:mt-[100px]">
        <StoreBanner />
        <StoreCard />
      </div>
    </section>
  );
};

export default Store;
