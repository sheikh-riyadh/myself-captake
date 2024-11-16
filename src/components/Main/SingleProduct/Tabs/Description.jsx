import PropTypes from "prop-types";
const Description = ({ description }) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex flex-col" dangerouslySetInnerHTML={{ __html: description }}></div>
    </div>
  );
};
Description.propTypes = {
  description: PropTypes.object,
};
export default Description;
