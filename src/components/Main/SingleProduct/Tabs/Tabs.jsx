import { useState } from "react";
import PropTypes from "prop-types";
import Description from "./Description";
import Additionalinfo from "./Additionalinfo";
import Questions from "./Questions";
import Reviews from "./Reviews";
import MoreFromSeller from "./MoreFromSeller";

const Tabs = ({product}) => {
  const [tab, setTab] = useState("Description");

  let tabContainer;

  if (tab == "Description") {
    tabContainer = <Description description={product?.description} />;
  } else if (tab == "Additional info") {
    tabContainer = <Additionalinfo additionalinfo={product?.additionalinfo} />;
  } else if (tab == "Questions") {
    tabContainer = <Questions />;
  } else if (tab == "Reviews") {
    tabContainer = <Reviews />;
  } else {
    tabContainer = <MoreFromSeller />;
  }

  return (
    <div className="my-10 xl:my-20">
      <div className="grid md:grid-cols-5 text-center rounded bg-stech overflow-hidden shadow-md">
        {[
          "Description",
          "Additional info",
          "Qestions",
          "Reviews",
          "More from seller",
        ].map((info) => (
          <button
            onClick={() => setTab(info)}
            className={`p-6 w-full hover:bg-white hover:text-stech  duration-500 uppercase font-medium md:text-sm h-full ${
              tab == info ? "bg-white text-stech" : "text-white"
            }`}
            key={info}
          >
            {info}
          </button>
        ))}
      </div>
      <div className="mt-10">{tabContainer}</div>
    </div>
  );
};

Tabs.propTypes = {
  product: PropTypes.object,
};
export default Tabs;
