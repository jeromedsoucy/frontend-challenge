import React from "react";

const Button = ({ type = "button", children, ...props }) => {
  return (
    <button {...props} type={type}>
      {children}
    </button>
  );
};

export default Button;
