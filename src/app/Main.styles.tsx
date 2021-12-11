import styled from "@emotion/styled/macro";
import { mediumPurple } from "../styles/colors";
import { Container } from "../styles/patterns";

export const MainContainer = styled.main`
  ${Container};
  border-top: 1px solid ${mediumPurple};
`;
