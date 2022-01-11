import { useSelector } from "react-redux";
import { State } from "../../redux/types";
import { MenuProps } from "../../utils/types";
import {
  Calories,
  MenuContainer,
  Name,
  Navigation,
  NavigationButton,
  ProfileData,
} from "./Menu.styles";

function Menu({ onClose }: MenuProps) {
  const data = useSelector((state: State) => state.profile);

  return (
    <MenuContainer>
      <ProfileData>
        <Name>{data.name}</Name>
        <Calories>{data.targetMetabolism} ккал</Calories>
      </ProfileData>
      <Navigation>
        <NavigationButton
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
          onClick={onClose}
        >
          Калькулятор
        </NavigationButton>
        <NavigationButton
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/profile"
          onClick={onClose}
        >
          Профиль
        </NavigationButton>
        <NavigationButton
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/about-project"
          onClick={onClose}
        >
          О приложении
        </NavigationButton>
      </Navigation>
    </MenuContainer>
  );
}

export default Menu;
