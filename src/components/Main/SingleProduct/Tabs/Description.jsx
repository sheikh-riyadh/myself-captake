import PropTypes from "prop-types";
const Description = ({ description }) => {
  return (
    <div>
      <h1>{description}</h1>
    </div>
  );
};
Description.propTypes = {
  description: PropTypes.object,
};
export default Description;
