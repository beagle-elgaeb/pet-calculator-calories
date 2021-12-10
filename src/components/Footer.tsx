import styled from "@emotion/styled/macro";
import { Container, HoverAnimation } from "../styles/patterns";

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

const FooterContainer = styled.footer`
  ${Container};

  font-size: 14px;
  line-height: 16px;
  font-weight: 300;
  margin: 0 auto;
`;

const Copyright = styled.a`
  text-decoration: none;
  margin: 0 0 0 30px;

  :hover {
    opacity: 0.8;
  }

  ${HoverAnimation}
`;
