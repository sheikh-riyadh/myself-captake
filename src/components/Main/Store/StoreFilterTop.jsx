import PropTypes from "prop-types";
const StoreFilterTop = ({ data }) => {
  return (
    <div className="my-14">
      <div className="border-b-2 p-5 bg-white rounded-xl">
        <div className="flex items-center justify-between gap-5">
          <span className="font-semibold">Total store : {data?.length}</span>
          <div className="flex flex-wrap items-center gap-5">
            <div className="items-center gap-2 hidden md:flex">
              <span className="font-semibold">Store Limit:</span>
              <select className="focus:outline-none border p-1 rounded-md text-base">
                <option value="">5</option>
                <option value="">10</option>
                <option value="">10</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

StoreFilterTop.propTypes = {
  data: PropTypes.array,
};
export default StoreFilterTop;
