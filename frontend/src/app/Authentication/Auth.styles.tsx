import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { mediumPurple } from "../../styles/colors";
import {
  ContainerPattern,
  HoverAnimation,
  LinkAuthPattern,
  TextAuthPattern,
  TitleAuthPattern,
} from "../../styles/patterns";

export const AuthContainer = styled.main`
  ${ContainerPattern};
  
`;

export const Title = styled.h2`
  ${TitleAuthPattern}
`;

export const Text = styled.h2`
  ${TextAuthPattern}
`;

export const Form = styled.form``;

export const LinlkToRegister = styled(Link)`
  ${LinkAuthPattern}

  ${HoverAnimation}
`;
