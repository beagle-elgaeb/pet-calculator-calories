import styled from "@emotion/styled/macro";
import { ContainerPattern } from "../../styles/patterns";

export const AboutProjectContainer = styled.main`
  ${ContainerPattern};
  text-align: start;
`;

export const Title = styled.h2`
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
  text-align: center;
  margin: 10px 0 0;
`;

export const Subtitlele = styled.h3`
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  margin: 30px 0;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: 300;
  margin: 7px 0;
`;
