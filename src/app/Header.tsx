import { HeaderProps } from "../utils/types";
import {
  Center,
  HeaderContainer,
  Logo,
  LogoInside,
  MenuButton,
  Title,
} from "./Header.styles";

function Header({ onMenuClick, popupOpened }: HeaderProps) {
  return (
    <HeaderContainer>
      <Logo to="/" visible={popupOpened}>
        <LogoInside></LogoInside>
      </Logo>
      <Center>
        <Title>Минималистичный</Title>
        <Title>калькулятор</Title>
        <Title> калорий</Title>
      </Center>
      <MenuButton
        type="button"
        onClick={onMenuClick}
        aria-label="Открыть меню"
      ></MenuButton>
    </HeaderContainer>
  );
}

export default Header;
