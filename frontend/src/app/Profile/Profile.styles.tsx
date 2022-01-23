import styled from "@emotion/styled/macro";
import { mediumPurple, purple } from "../../styles/colors";
import { ContainerPattern, HoverAnimation } from "../../styles/patterns";
import { Link } from "react-router-dom";

export const ProfileContainer = styled.main`
  ${ContainerPattern};
  border-top: 1px solid ${mediumPurple};
`;

export const LinkToCalc = styled(Link)`
  display: block;
  font-size: 14px;
  line-height: 14px;
  font-weight: 300;
  color: ${purple};
  text-decoration: none;
  text-transform: lowercase;
  margin: 10px auto 60px;

  ${HoverAnimation}
`;
