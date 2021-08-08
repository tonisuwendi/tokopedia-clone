import { css } from "@emotion/css";

export const inputElm = ({ height, width }) => css`
  height: ${height}px;
  position: relative;
  min-width: 150px;
  width: ${width};
`;

export const input = (button) => css`
  border: 1px solid #e5e7e9;
  border-radius: 7px;
  box-sizing: border-box;
  color: #555;
  font-size: 13.5px;
  height: 100%;
  outline: none;
  padding: 0 12px;
  padding-right: ${button ? "45px" : "12px"};
  position: absolute;
  transition: 0.2s;
  width: 100%;
  ::placeholder {
    color: #ddd;
    opacity: 1;
  }
  :-ms-input-placeholder {
    color: #ddd;
  }
  ::-ms-input-placeholder {
    color: #ddd;
  }
  &:focus {
    border: 1px solid #4fd15a;
  }
`;

export const buttonSearch = ({ size }) => css`
  background-color: #f3f4f5;
  border: none;
  border-bottom-right-radius: 7px;
  border-top-right-radius: 7px;
  cursor: pointer;
  height: calc(${size}px - 2px);
  position: absolute;
  right: 1px;
  top: 1px;
  transition: 0.2s;
  width: calc(${size}px + 2px);
  &:hover {
    background-color: #e6e6e7;
  }
`;
