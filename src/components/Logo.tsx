import { LogoProps } from "../utils/types";
import { LogoContainer, LogoInside } from "./Logo.styles";

function Logo({ opened, onClickHandle }: LogoProps) {
  return (
    <LogoContainer to="/" visible={opened} onClick={onClickHandle}>
      <LogoInside></LogoInside>
    </LogoContainer>
  );
}

export default Logo;
