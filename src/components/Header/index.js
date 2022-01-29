import React from "react";

const Header = ({ children, ...props }) => {
  return (
    <div style={{ paddingBottom: "2rem" }}>
      <h1 {...props}>{children}</h1>
    </div>
  );
};

export default Header;
