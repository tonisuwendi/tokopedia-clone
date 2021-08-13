import { css } from "@emotion/css";

export const boxShadow = css`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.07);
`;

export const textGreen = css`
  color: #03ac0e;
  &:hover {
    color: #12883d;
  }
`;

export const textHoverPrimaryColor = css`
  &:hover {
    color: #03ac0e;
  }
`;

export const fontTitle = (size) => css`
  color: rgba(49, 53, 59, 0.96);
  font-family: "Nunito Sans", sans-serif;
  font-size: ${size}px;
  margin-bottom: 15px;
`;
