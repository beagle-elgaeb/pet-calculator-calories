import styled from "@emotion/styled/macro";
import { lightPurple, mediumPurple, purple, yellow } from "../styles/colors";

export const InputContainer = styled.div<{
  startWeight?: boolean;
}>`
  height: 40px;
  width: ${({ startWeight }) => (startWeight ? "80px" : "100%")};
  position: relative;
  margin: ${({ startWeight }) => (startWeight ? "0 5px 10px" : "0 0 10px")};
`;

export const InputItem = styled.input<{
  isValid: boolean;
  startWeight?: boolean;
}>`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  background: ${lightPurple};
  border: ${({ isValid }) => (isValid ? "none" : `1px solid ${yellow}`)};
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  line-height: 20px;
  color: ${purple};
  ${({ startWeight }) => (startWeight ? "text-align: center;" : "")};
  padding: ${({ startWeight }) => (startWeight ? "0" : "0 10px 0 25px")};

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

export const Label = styled.p<{
  fullness: boolean;
  isValid: boolean;
  startWeight?: boolean;
}>`
  width: ${({ fullness }) => (fullness ? "fit-content" : "24px")};
  position: absolute;
  top: ${({ fullness }) => (fullness ? "-6px" : "8px")};
  left: ${({ fullness }) => (fullness ? "5px" : "1px")};
  display: ${({ startWeight }) => (startWeight ? "none" : "inline")};
  background: ${lightPurple};
  border-top: ${({ fullness, isValid }) =>
    fullness ? (isValid ? "none" : `1px solid ${yellow}`) : "none"};
  font-size: ${({ fullness }) => (fullness ? "10px" : "20px")};
  line-height: ${({ fullness }) => (fullness ? "12px" : "22px")};
  text-align: right;
  margin: 0;
  padding: ${({ fullness }) => (fullness ? "0 10px" : "0")};
`;

export const Error = styled.div<{ isValid: boolean }>`
  position: absolute;
  bottom: -6px;
  right: 10px;
  background: ${lightPurple};
  border-bottom: ${({ isValid }) => (isValid ? "none" : `1px solid ${yellow}`)};
  font-size: 12px;
  line-height: 14px;
  color: ${yellow};
  padding: 0 10px;
`;
