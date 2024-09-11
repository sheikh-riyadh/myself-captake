import { forwardRef } from "react";
import PropTypes from "prop-types";
import cn from "../../utils/cn";

const SelectInput = forwardRef(({ className, children, ...rest }, ref) => {
  return (
    <select
      className={cn(
        `focus:outline-none bg-gray-100 w-full py-2 px-2 rounded-md`,
        className
      )}
      {...rest}
      ref={ref}
    >
      {children}
    </select>
  );
});
SelectInput.displayName = "SelectInput";

SelectInput.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default SelectInput;
