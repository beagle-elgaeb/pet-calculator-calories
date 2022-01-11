import styled from "@emotion/styled/macro";
import cross from "../../icons/cross.svg";
import { HoverAnimation } from "../../styles/patterns";

export const MealContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  row-gap: 10px;
  padding: 0 0 6px 0;

  :last-child {
    padding: 0;
  }
`;

export const MealName = styled.div`
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  text-align: start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;

  ${HoverAnimation}
`;

export const DeleteButton = styled.button`
  height: 16px;
  width: 16px;
  background: url(${cross});
  background-size: contain;
  border: none;
  border-radius: 2px;
  outline: none;
  margin: auto;

  :hover {
    transform: rotate(10deg);
  }

  ${HoverAnimation}
`;
