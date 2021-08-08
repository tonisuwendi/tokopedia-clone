import React from "react";
import { cx } from "@emotion/css";
import { buttonSearch, input, inputElm } from "./styles";
import { SearchIcon } from "../../../assets";

const InputForm = ({
  height = 30,
  width = "100%",
  placeholder = "",
  button,
}) => {
  return (
    <div className={cx(inputElm({ height, width }))}>
      <input
        type="text"
        placeholder={placeholder}
        className={cx(input(button))}
      />
      {button && (
        <button className={cx(buttonSearch({ size: height }))}>
          <img
            style={{ width: 20, position: "relative", top: 1 }}
            src={SearchIcon}
            alt="search icon"
          />
        </button>
      )}
    </div>
  );
};

export default InputForm;
