import styled from "@emotion/styled";
import { Container } from "../styles/patterns";
import Form from "./Form";
import Days from "./Days";

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
`;
