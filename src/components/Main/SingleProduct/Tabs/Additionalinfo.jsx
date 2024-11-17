import PropTypes from "prop-types";
const Additionalinfo = ({ additionalinfo }) => {
  return <div dangerouslySetInnerHTML={{ __html: additionalinfo }}></div>;
};
Additionalinfo.propTypes = {
  additionalinfo: PropTypes.string,
};
export default Additionalinfo;
