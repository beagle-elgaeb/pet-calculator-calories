import {
  Close,
  Logo,
  LogoInside,
  MenuPopupContainer,
  MenuPopupOverlay,
} from "./MenuPopup.styles";
import { useEventListener } from "../utils/eventListener";
import { MenuPopupProps } from "../utils/types";
import Menu from "../components/Menu";

function MenuPopup({ isOpen, onClose, onKeydown }: MenuPopupProps) {
  useEventListener(isOpen, onKeydown, "keydown");

  return (
    <MenuPopupOverlay opened={isOpen} onClick={onClose}>
      <MenuPopupContainer opened={isOpen} onClick={(e) => e.stopPropagation()}>
        <Logo to="/" onClick={onClose}>
          <LogoInside></LogoInside>
        </Logo>
        <Close onClick={onClose}></Close>
        <Menu onClose={onClose} />
      </MenuPopupContainer>
    </MenuPopupOverlay>
  );
}

export default MenuPopup;
