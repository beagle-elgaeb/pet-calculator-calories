import styled from "@emotion/styled/macro";
import arrowDown from "../../icons/arrow-down.svg";
import arrowRight from "../../icons/arrow-right.svg";
import { brightPurple, mediumPurple } from "../../styles/colors";
import { ContainerPattern } from "../../styles/patterns";

export const CalculatorContainer = styled.main`
  ${ContainerPattern};
  border-top: 1px solid ${mediumPurple};
`;

export const OpenFormButton = styled.button`
  width: 100%;
  display: flex;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 18px;
  font-weight: 300;
  color: ${brightPurple};
  text-align: start;
  text-transform: uppercase;
  margin: 0 0 20px 0;
`;

export const OpenFormButtonIcon = styled.div<{ visible: boolean }>`
  height: 18px;
  width: 18px;
  background: url(${({ visible }) => (visible ? arrowRight : arrowDown)});
  background-size: contain;
  margin: 0 5px 0 0;
`;
