import styled from "@emotion/styled/macro";
import { lightPurple, mediumPurple, purple } from "../../styles/colors";
import { HoverAnimation } from "../../styles/patterns";

export const FormContainer = styled.form`
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 12px;
  line-height: 14px;
  font-weight: 300;
  text-align: start;
  margin: 0 0 15px;
`;

export const Text = styled.p`
  align-self: center;
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  margin: 0 0 15px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: start;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const SaveButton = styled.button<{ disabled: boolean }>`
  height: 36px;
  width: 100%;
  box-sizing: border-box;
  background: ${lightPurple};
  border: 1px solid ${mediumPurple};
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  line-height: 20px;
  color: ${({ disabled }) => (disabled ? `${mediumPurple}` : `${purple}`)};
  margin: 60px 0;

  :hover {
    box-shadow: 0 0 5px 1px ${mediumPurple};
  }

  ${HoverAnimation}
`;
