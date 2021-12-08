import { css } from "@emotion/react";
import { lightPurple, mediumPurple, purple, yellow } from "./colors";

export const Container = css`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 0;
`;

export const Label = ({
  fullness,
  isValid,
}: {
  fullness: boolean;
  isValid: boolean;
}) => css`
  position: absolute;
  top: ${fullness ? "-6px" : "6px"};
  ${fullness ? `background: ${lightPurple};` : ""};
  ${fullness ? (isValid ? "" : `border-top: 1px solid ${yellow};`) : ""};
  font-size: ${fullness ? "10px" : "20px"};
  line-height: ${fullness ? "12px" : "22px"};
  margin: 0;
  ${fullness ? "padding: 0 10px;" : ""};
`;

export const Input = ({ isValid }: { isValid: boolean }) => css`
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
  padding: 0 10px;

  ::placeholder {
    font-size: 14px;
    line-height: 16px;
    font-weight: 300;
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

export const table = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 10px;
`;
