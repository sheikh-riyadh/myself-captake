import PropTypes from "prop-types";
import Marquee from "react-fast-marquee";
const Notice = ({ sellerId }) => {
  return (
    <div className="bg-white p-4 rounded-full my-10">
      <Marquee>
        <span className="font-semibold">
          5th June Wednesday, our all outlets are open. Additionally, our online
          activities are open and operational.
        </span>
      </Marquee>
    </div>
  );
};

Notice.propTypes = {
  sellerId: PropTypes.string,
};
export default Notice;
