import styled from "@emotion/styled/macro";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  brightPurple,
  darkYellow,
  lightPurple,
  purple,
  yellow,
} from "../styles/colors";
import { HoverAnimation } from "../styles/patterns";
import Menu from "./Menu";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
  onKeydown: (evt: KeyboardEvent) => void;
};

function MenuPopup({ isOpen, onClose, onKeydown }: PropsType) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <MenuPopupOverlay opened={isOpen} onClick={onClose}>
      <MenuPopupContainer opened={isOpen} onClick={(e) => e.stopPropagation()}>
        <Logo to="/" onClick={onClose}>
          <LogoInside></LogoInside>
        </Logo>
        <Close onClick={onClose}></Close>
        <Menu onClose={onClose} />
      </MenuPopupContainer>
    </MenuPopupOverlay>
  );
}

export default MenuPopup;

const MenuPopupOverlay = styled.div<{ opened: boolean }>`
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

const Logo = styled(Link)`
  height: 19px;
  width: 22px;
  position: absolute;
  top: 30px;
  left: 30px;
  display: block;
  background: ${yellow};
  border: 2px solid ${purple};
  border-top-left-radius: 6px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 6px;
  transition: all 0.2s ease-out;

  :hover {
    margin: 2px 0 0 0;
  }

  ${HoverAnimation}
`;

const LogoInside = styled.div`
  height: 19px;
  width: 19px;
  box-sizing: border-box;
  background: radial-gradient(circle, ${brightPurple} 0%, ${yellow} 50%);
  border: 2px solid ${brightPurple};
  border-radius: 99em;
  margin: auto;
`;

export const Close = styled.button`
  height: 17px;
  width: 17px;
  position: absolute;
  top: 30px;
  right: 30px;
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
