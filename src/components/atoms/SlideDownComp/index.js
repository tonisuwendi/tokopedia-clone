import React from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import "../../../assets/app.css";

const SlideDownComp = ({ open, children }) => {
  return (
    <SlideDown className={`my-dropdown-slidedown`}>
      {open ? children : null}
    </SlideDown>
  );
};

export default SlideDownComp;
