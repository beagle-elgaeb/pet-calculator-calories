import styled from "@emotion/styled/macro";
import { Container } from "../styles/patterns";
import Form from "./Form";
import Days from "./Days";
import { mediumPurple } from "../styles/colors";

function Main() {
  return (
    <MainContainer>
      <Form />
      <Days />
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.main`
  ${Container};
  border-top: 1px solid ${mediumPurple};
`;
