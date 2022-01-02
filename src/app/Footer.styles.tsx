import styled from "@emotion/styled/macro";
import { ContainerPattern, HoverAnimation } from "../styles/patterns";

export const FooterContainer = styled.footer`
  ${ContainerPattern};

  display: flex;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  margin: 0;
`;

export const Copyright = styled.a`
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  color: #3f23a6;
  text-decoration: none;
  margin: 0 0 0 30px;

  :hover {
    opacity: 0.8;
  }

  ${HoverAnimation}
`;
