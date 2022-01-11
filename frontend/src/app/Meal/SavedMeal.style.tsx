import styled from "@emotion/styled/macro";
import { lightPurple, mediumPurple, purple } from "../../styles/colors";
import { HoverAnimation } from "../../styles/patterns";

export const SavedMealContainer = styled.div`
  width: calc(100% - 30px);
  margin: 0 auto;
`;

export const Data = styled.div`
  height: 36px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  background: ${lightPurple};
  border-radius: 5px;
  font-size: 18px;
  line-height: 20px;
  text-align: start;
  color: ${purple};
  margin: 0 0 10px 0;
  padding: 8px 0 0 25px;
`;

export const Label = styled.div`
  width: fit-content;
  position: absolute;
  top: -6px;
  left: 5px;
  display: inline;
  background: ${lightPurple};
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  text-align: right;
  margin: 0;
  padding: 0 10px;
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

export const Text = styled.p`
  align-self: center;
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  margin: 0 0 15px;
`;

export const EditButton = styled.button`
  height: 36px;
  width: 100%;
  box-sizing: border-box;
  background: ${lightPurple};
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  color: ${purple};
  margin: 60px auto;

  :hover {
    box-shadow: 0 0 5px 1px ${mediumPurple};
  }

  ${HoverAnimation}
`;
