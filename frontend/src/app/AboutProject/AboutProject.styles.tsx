import styled from "@emotion/styled/macro";
import { mediumPurple } from "../../styles/colors";
import { ContainerPattern } from "../../styles/patterns";

export const AboutProjectContainer = styled.main`
  ${ContainerPattern};
  text-align: start;
`;

export const Title = styled.h2`
  font-size: 22px;
  line-height: 24px;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
  margin: 10px 0 30px;
`;

export const Subtitlele = styled.h3`
  font-size: 22px;
  line-height: 24px;
  font-weight: 300;
  margin: 30px 0;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 20px;
  font-weight: 300;
  text-align: justify;
  margin: 7px 0;
`;

export const Span = styled.span`
  font-weight: 400;
`;

export const List = styled.ul`
  list-style: circle;
  list-style-position: inside;
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: 18px;
  line-height: 20px;
  font-weight: 300;
  text-align: justify;
`;

export const ListItemUnavailable = styled.li`
  color: ${mediumPurple};
  text-decoration: line-through;
`;
