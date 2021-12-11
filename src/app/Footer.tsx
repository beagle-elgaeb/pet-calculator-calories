import { Copyright, FooterContainer } from "./Footer.styles";

function Footer() {
  return (
    <FooterContainer>
      (2021)
      <Copyright
        href="https://github.com/beagle-elgaeb"
        target="_blank"
        aria-label="Мой репозиторий"
      >
        © Никонова Евгения
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
