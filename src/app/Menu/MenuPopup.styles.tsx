import styled from "@emotion/styled/macro";
import { darkYellow, lightPurple } from "../../styles/colors";
import { HoverAnimation } from "../../styles/patterns";

export const MenuPopupOverlay = styled.div<{ opened: boolean }>`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: end;
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
  opacity: ${({ opened }) => (opened ? "1" : "0")};
  background: rgba(63, 35, 166, 0.1);
  transition: all 0.3s ease-in;
  z-index: ${({ opened }) => (opened ? "9" : "-1")};
`;

export const MenuPopupContainer = styled.div<{ opened: boolean }>`
  height: 100vh;
  width: 95%;
  max-width: 350px;
  position: absolute;
  top: 0;
  right: ${({ opened }) => (opened ? "0" : "-500px")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${lightPurple};
  transition: all 0.3s ease-in;
  z-index: 10;
`;

export const Buttons = styled.div`
  width: calc(100% - 60px);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 30px 30px 0 30px;
`;

export const Close = styled.button`
  height: 17px;
  width: 17px;
  background: transparent;
  background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0) 11px,
      ${darkYellow} 11px,
      ${darkYellow} 13px,
      rgba(255, 255, 255, 0) 13px,
      rgba(255, 255, 255, 0) 24px
    ),
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0) 11px,
      ${darkYellow} 11px,
      ${darkYellow} 13px,
      rgba(255, 255, 255, 0) 13px,
      rgba(255, 255, 255, 0) 24px
    );
  border: none;
  outline: none;

  ${HoverAnimation}
`;
