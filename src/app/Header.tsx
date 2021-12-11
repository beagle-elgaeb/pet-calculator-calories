import { HeaderProps } from "../utils/types";
import { Center, HeaderContainer, MenuButton, Title } from "./Header.styles";
import Logo from "./Logo";

function Header({ onMenuClick, popupOpened }: HeaderProps) {
  return (
    <HeaderContainer>
      <Logo opened={popupOpened} />
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
