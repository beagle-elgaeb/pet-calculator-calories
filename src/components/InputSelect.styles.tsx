import styled from "@emotion/styled/macro";
import { mediumPurple, purple, white } from "../styles/colors";
import {
  ErrorPattern,
  InputPattern,
  InputContainerPattern,
  LabelPattern,
} from "../styles/patterns";

export const InputSelectContainer = styled.div`
  ${InputContainerPattern}
`;

export const InputItem = styled.input<{ isValid: boolean; opened: boolean }>`
  ${InputPattern}
`;

export const Label = styled.p<{ fullness: boolean; isValid: boolean }>`
  ${LabelPattern}
`;

export const Error = styled.div<{ isValid: boolean }>`
  ${ErrorPattern}
`;

export const List = styled.div<{ opened: boolean }>`
  height: ${({ opened }) => (opened ? "fit-content" : "0")};
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 40px;
  left: 0;
  display: ${({ opened }) => (opened ? "flex" : "none")};
  flex-direction: column;
  background: ${white};
  border: 1px solid ${mediumPurple};
  border-top: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 0;
  z-index: 10;
`;

export const ListItem = styled.button`
  min-height: 50px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${mediumPurple};
  outline: none;
  padding: 5px 15px;

  :last-child {
    border: none;
  }
`;

export const ListItemText = styled.p`
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  color: ${purple};
  text-align: left;
  margin: 0;
`;

export const ListItemSpan = styled.span`
  font-weight: 600;
  margin: 0;
`;
