import React from "react";

const Label = ({ type = "button", className, children, ...props }) => {
  return (
    <label {...props} className={`form-label ${className}`}>
      {children}
    </label>
  );
};

export default Label;
