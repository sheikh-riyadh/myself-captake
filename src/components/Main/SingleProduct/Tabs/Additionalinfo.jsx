import PropTypes from "prop-types";
const Additionalinfo = ({ additionalinfo }) => {
  return (
    <div>
      <h1>{additionalinfo}</h1>
    </div>
  );
};
Additionalinfo.propTypes = {
  additionalinfo: PropTypes.object,
};
export default Additionalinfo;
