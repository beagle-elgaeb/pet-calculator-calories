import { css } from "@emotion/react";
import { lightPurple, mediumPurple, purple, yellow } from "./colors";

export const ContainerPattern = css`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 0;
`;

export const InputContainerPattern = ({
  startWeight,
}: {
  startWeight?: boolean;
}) => css`
  height: 40px;
  width: ${startWeight ? "80px" : "100%"};
  position: relative;
  margin: ${startWeight ? "0 5px 10px" : "6px 0 10px"};
`;

export const InputPattern = ({
  isValid,
  opened,
  startWeight,
}: {
  isValid: boolean;
  opened?: boolean;
  startWeight?: boolean;
}) => css`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  background: ${lightPurple};
  border: ${isValid ? "none" : `1px solid ${yellow}`};
  border-bottom: ${opened
    ? `1px solid ${mediumPurple}`
    : isValid
    ? "none"
    : `1px solid ${yellow}`};
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  line-height: 20px;
  color: ${purple};
  ${startWeight ? "text-align: center;" : ""};
  padding: ${startWeight ? "0" : "0 10px 0 25px"};

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

export const LabelPattern = ({
  fullness,
  isValid,
  startWeight,
}: {
  fullness: boolean;
  isValid: boolean;
  startWeight?: boolean;
}) => css`
  width: ${fullness ? "fit-content" : "24px"};
  position: absolute;
  top: ${fullness ? "-6px" : "8px"};
  left: ${fullness ? "5px" : "1px"};
  display: ${startWeight ? "none" : "inline"};
  background: ${lightPurple};
  border-top: ${fullness ? (isValid ? "none" : `1px solid ${yellow}`) : "none"};
  font-size: ${fullness ? "12px" : "20px"};
  line-height: ${fullness ? "12px" : "22px"};
  font-weight: 400;
  text-align: right;
  margin: 0;
  padding: ${fullness ? "0 10px" : "0"};
`;

export const ErrorPattern = ({ isValid }: { isValid: boolean }) => css`
  position: absolute;
  bottom: -6px;
  right: 10px;
  background: ${lightPurple};
  border-bottom: ${isValid ? "none" : `1px solid ${yellow}`};
  font-size: 12px;
  line-height: 14px;
  color: ${yellow};
  padding: 0 10px;
`;

export const TablePattern = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 10px;
`;

export const TitleAuthPattern = css`
  font-size: 22px;
  line-height: 24px;
  font-weight: 400;
  /* text-align: left; */
  /* text-transform: uppercase; */
  margin: 10px 0 30px;
`;

export const TextAuthPattern = css`
  font-size: 14px;
  line-height: 14px;
  font-weight: 200;
  text-align: center;
  margin: 10px 0 30px;
`;

export const LinkAuthPattern = css`
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  color: ${purple};
  text-decoration: none;
  margin: 0 auto 60px;
`;

export const ButtonAuthPattern = ({ disabled }: { disabled: boolean }) => css`
  height: 36px;
  width: 100%;
  box-sizing: border-box;
  background: ${lightPurple};
  border: 1px solid ${mediumPurple};
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  color: ${disabled ? `${mediumPurple}` : `${purple}`};
  margin: 60px 0;

  :hover {
    box-shadow: 0 0 5px 1px ${mediumPurple};
  }
`;

export const HoverAnimation = css`
  transition: all 0.2s ease-out;
  cursor: pointer;
`;
