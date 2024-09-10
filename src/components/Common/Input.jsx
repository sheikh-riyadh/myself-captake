import { forwardRef } from "react";
import PropTypes from "prop-types";
import cn from "../../utils/cn";

const Input = forwardRef(({ className, type = "text", ...rest }, ref) => {
  return (
    <input
      className={cn(
        `focus:outline-none bg-gray-100 w-full py-2 px-2 rounded-md`,
        className
      )}
      {...rest}
      type={type}
      ref={ref}
    />
  );
});
Input.displayName = "Input";

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
