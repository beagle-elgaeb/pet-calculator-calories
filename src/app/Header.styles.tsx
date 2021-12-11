import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import {
  brightPurple,
  darkYellow,
  purple,
  white,
  yellow,
} from "../styles/colors";
import { Container, HoverAnimation } from "../styles/patterns";

export const HeaderContainer = styled.header`
  ${Container};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid ${yellow};
`;

export const Logo = styled(Link)<{ visible: boolean }>`
  height: 19px;
  width: 22px;
  display: block;
  ${({ visible }) => (visible ? "visibility: hidden" : "visibility: visible")};
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

export const LogoInside = styled.div`
  height: 19px;
  width: 19px;
  box-sizing: border-box;
  background: radial-gradient(circle, ${brightPurple} 0%, ${yellow} 50%);
  border: 2px solid ${brightPurple};
  border-radius: 99em;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 20px;
  line-height: 22px;
  font-weight: 400;
  color: ${yellow};
  text-shadow: 0 1px 1px ${purple};
  margin: 0;
`;

export const Center = styled.div``;

export const MenuButton = styled.button`
  height: 19px;
  width: 22px;
  background: linear-gradient(
    180deg,
    ${darkYellow} 0,
    ${darkYellow} 3px,
    ${white} 3px,
    ${white} 8px,
    ${purple} 8px,
    ${purple} 11px,
    ${white} 11px,
    ${white} 16px,
    ${darkYellow} 16px,
    ${darkYellow} 19px
  );
  border: none;
  outline: none;
  margin: 0;

  :hover {
    margin: 2px 0 0 0;
  }

  ${HoverAnimation}
`;
