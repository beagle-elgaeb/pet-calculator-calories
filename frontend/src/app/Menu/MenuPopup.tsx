import Logo from "../../components/Logo";
import { useEventListener } from "../../utils/eventListener";
import { MenuPopupProps } from "../../utils/types";
import Menu from "./Menu";
import {
  Buttons,
  Close,
  MenuPopupContainer,
  MenuPopupOverlay,
} from "./MenuPopup.styles";

function MenuPopup({ isOpen, onClose, onKeydown }: MenuPopupProps) {
  useEventListener(isOpen, onKeydown, "keydown");

  return (
    <MenuPopupOverlay opened={isOpen} onClick={onClose}>
      <MenuPopupContainer opened={isOpen} onClick={(e) => e.stopPropagation()}>
        <Buttons>
          <Logo onClickHandle={onClose} />
          <Close onClick={onClose}></Close>
        </Buttons>
        <Menu onClose={onClose} />
      </MenuPopupContainer>
    </MenuPopupOverlay>
  );
}

export default MenuPopup;
