import styled from "@emotion/styled/macro";
import cross from "../../icons/cross.svg";
import { purpleTransparent, white } from "../../styles/colors";
import { HoverAnimation } from "../../styles/patterns";

export const MealPopupOverlay = styled.div<{ opened: boolean }>`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
  opacity: ${({ opened }) => (opened ? "1" : "0")};
  background: ${purpleTransparent};
  transition: all 0.3s ease-in;
  z-index: ${({ opened }) => (opened ? "11" : "-1")};
`;

export const MealPopupContainer = styled.div<{ opened: boolean }>`
  width: 90%;
  position: absolute;
  top: 100px;
  left: 5%;
  display: flex;
  flex-direction: column;
  background: ${white};
  border-radius: 10px;
  transition: all 0.3s ease-in;
  z-index: 12;
`;

export const Close = styled.button`
  height: 20px;
  width: 20px;
  background: url(${cross});
  background-size: contain;
  border: none;
  border-radius: 2px;
  outline: none;
  margin: 30px 30px 30px auto;

  :hover {
    transform: rotate(10deg);
  }

  ${HoverAnimation}
`;
