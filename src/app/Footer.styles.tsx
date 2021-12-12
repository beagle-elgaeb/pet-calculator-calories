import styled from "@emotion/styled/macro";
import { ContainerPattern, HoverAnimation } from "../styles/patterns";

export const FooterContainer = styled.footer`
  ${ContainerPattern};

  font-size: 14px;
  line-height: 16px;
  font-weight: 300;
  margin: 0 auto;
`;

export const Copyright = styled.a`
  text-decoration: none;
  margin: 0 0 0 30px;

  :hover {
    opacity: 0.8;
  }

  ${HoverAnimation}
`;
