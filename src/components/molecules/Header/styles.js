import { css } from "@emotion/css";

export const header = css`
  background-color: white;
  height: 110px;
  position: relative;
  width: 100%;
`;

export const headerTop = css`
  align-items: center;
  background-color: #f3f4f5;
  box-sizing: border-box;
  display: flex;
  height: 32px;
  justify-content: space-between;
  padding: 0 30px;
`;

export const downloadAppItem = css`
  display: flex;
`;

export const normalText = (height) => css`
  color: rgba(49, 53, 59, 0.68);
  font-size: 13px;
  line-height: ${height}px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const headerMiddle = css`
  align-items: center;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 30px;
  position: relative;
  width: 100%;
`;

export const centerElement = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const squareHoverGrey = css`
  cursor: pointer;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 13px;
  padding: 6px 8px;
  margin-left: 15px;
  transition: 0.2s;
  &:hover {
    background-color: #f3f4f5;
  }
`;

export const iconSize = css`
  width: 34px;
`;

export const verticalLine = css`
  background-color: #e6e6e7;
  height: 28px;
  margin-left: 25px;
  width: 1px;
`;

export const profileWrapper = css`
  align-items: center;
  display: flex;
  width: 120px;
`;

export const photoProfile = css`
  border-radius: 50%;
  height: 28px;
  margin-right: 10px;
  object-fit: cover;
  width: 28px;
`;

export const titleProfile = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const trendingPopKey = css`
  display: flex;
  margin-left: 270px;
  position: relative;
  top: -2px;
  width: calc(100vw - 750px);
  white-space: nowrap;
`;

export const locationSent = css`
  bottom: 5px;
  cursor: pointer;
  position: absolute;
  right: 30px;
`;
