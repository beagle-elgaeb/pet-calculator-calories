import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { mediumPurple } from "../../styles/colors";
import {
  ButtonAuthPattern,
  ContainerPattern,
  HoverAnimation,
  LinkAuthPattern,
  TextAuthPattern,
  TitleAuthPattern,
} from "../../styles/patterns";

export const AuthenticationContainer = styled.main`
  ${ContainerPattern};
  border-top: 1px solid ${mediumPurple};
`;

export const Title = styled.h2`
  ${TitleAuthPattern}
`;

export const Text = styled.h2`
  ${TextAuthPattern}
`;

export const Form = styled.form``;

export const Linlk = styled(Link)`
  ${LinkAuthPattern}

  ${HoverAnimation}
`;

export const Button = styled.button`
  ${ButtonAuthPattern}

  ${HoverAnimation}
`;
