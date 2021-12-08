import styled from "@emotion/styled";
import { purple, yellow } from "../styles/colors";
import { Container } from "../styles/patterns";

function Header() {
  return (
    <HeaderContainer>
      <Title>Минималистичный калькулятор калорий</Title>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  ${Container};
`;

const Title = styled.h1`
  font-size: 20px;
  line-height: 22px;
  font-weight: 400;
  color: ${yellow};
  text-shadow: 0 1px 1px ${purple};
  margin: 0;
`;
