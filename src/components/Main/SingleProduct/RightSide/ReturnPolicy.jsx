import PropTypes from "prop-types";
import { useReturnPolicyQuery } from "../../../../store/main/service/product/productApi";
import LoadingSpinner from "../../../Common/LoadingSpinner";

const ReturnPolicy = ({ sellerId }) => {
  const { data, isLoading } = useReturnPolicyQuery(sellerId);
  return (
    <>
      {!isLoading ? (
        <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

ReturnPolicy.propTypes = {
  sellerId: PropTypes.string,
};
export default ReturnPolicy;
