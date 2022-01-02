import styled from "@emotion/styled/macro";
import { purple } from "../styles/colors";
import { ContainerPattern } from "../styles/patterns";

export const AppContainer = styled.div`
  ${ContainerPattern};

  min-height: 100vh;
  max-width: 500px;
  min-width: 315px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  color: ${purple};
  margin: 0 auto;
  padding: 0 10px 50px;
`;
