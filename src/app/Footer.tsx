import { Copyright, FooterContainer, Text } from "./Footer.styles";

function Footer() {
  return (
    <FooterContainer>
      <Text>(2021)</Text>
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
