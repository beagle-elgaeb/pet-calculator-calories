import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { brightPurple, purple, yellow } from "../styles/colors";
import { HoverAnimation } from "../styles/patterns";

const LogoOpts = {
  shouldForwardProp: (prop: string) => prop !== "visible",
};

export const LogoContainer = styled(Link, LogoOpts)<{ visible?: boolean }>`
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

  :hover {
    border-top-left-radius: 10px;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 10px;
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
