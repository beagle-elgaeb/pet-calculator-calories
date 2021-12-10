import { css } from "@emotion/react";
import { lightPurple, mediumPurple, purple, yellow } from "./colors";

export const Container = css`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 0;
`;

export const LabelPattern = ({
  fullness,
  isValid,
}: {
  fullness: boolean;
  isValid: boolean;
}) => css`
  width: ${fullness ? "fit-content" : "24px"};
  position: absolute;
  top: ${fullness ? "-6px" : "8px"};
  left: ${fullness ? "5px" : "1px"};
  background: ${lightPurple};
  border-top: ${fullness ? (isValid ? "none" : `1px solid ${yellow}`) : "none"};
  font-size: ${fullness ? "10px" : "20px"};
  line-height: ${fullness ? "12px" : "22px"};
  text-align: right;
  margin: 0;
  padding: ${fullness ? "0 10px" : "0"};
`;

export const InputPattern = ({ isValid }: { isValid: boolean }) => css`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  background: ${lightPurple};
  border: ${isValid ? "none" : `1px solid ${yellow}`};
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  line-height: 20px;
  color: ${purple};
  padding: 0 10px 0 25px;

  ::placeholder {
    font-size: 18px;
    line-height: 20px;
    font-weight: 200;
    color: ${mediumPurple};
  }

  :focus {
    border: 1px solid ${mediumPurple};
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Table = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 10px;
`;

export const HoverAnimation = css`
  transition: all 0.2s ease-out;
  cursor: pointer;
`;
