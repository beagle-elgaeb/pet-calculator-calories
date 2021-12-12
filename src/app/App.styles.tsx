import styled from "@emotion/styled/macro";
import { purple } from "../styles/colors";
import { ContainerPattern } from "../styles/patterns";

export const AppContainer = styled.div<{ scrollInactive: boolean }>`
  ${ContainerPattern};

  ${({ scrollInactive }) => (scrollInactive ? `height: 100vh;` : "")}
  ${({ scrollInactive }) => (scrollInactive ? `overflow-y: hidden;` : "")}

  min-height: 100vh;
  max-width: 500px;
  min-width: 320px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  color: ${purple};
  margin: 0 auto;
  padding: 0 10px 50px;
`;
