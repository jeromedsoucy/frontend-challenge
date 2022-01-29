import React from "react";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../../constants";

const getCurrentValue = (pathname) => {
  switch (pathname) {
    case ROUTES.HOME:
      return 10;
    case ROUTES.MORE_INFO:
      return 50;
    case ROUTES.CONFIRMATION:
      return 100;
    default:
      return 0;
  }
};

const Progress = () => {
  const { pathname } = useLocation();
  let currentValue = getCurrentValue(pathname);

  if (pathname === ROUTES.SUCCESS || pathname === ROUTES.ERROR) {
    return null;
  }

  return (
    <div
      className="progress"
      style={{
        borderRadius: 0,
      }}
    >
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={currentValue}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{
          width: `${currentValue}%`,
          transition: "width 1s ease-in-out",
        }}
      ></div>
    </div>
  );
};

export default Progress;
