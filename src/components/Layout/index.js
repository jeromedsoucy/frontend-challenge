import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div
        className="container"
        style={{ maxWidth: 400, margin: "0 auto", paddingTop: 100 }}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
