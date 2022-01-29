import React from "react";

const ButtonComponent = ({
  type = "button",
  className,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`btn btn-${
        type === "submit" ? "primary" : "secondary"
      } ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
