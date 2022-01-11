import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { lightPurple, mediumPurple, purple } from "../../styles/colors";
import { HoverAnimation } from "../../styles/patterns";

export const FormContainer = styled.form``;

export const Title = styled.h2`
  font-size: 12px;
  line-height: 14px;
  font-weight: 300;
  text-align: start;
  margin: 15px 0;
`;

export const Inputs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 20px 0 0;
`;

export const Results = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  grid-template-rows: 1fr;
  column-gap: 10px;
  row-gap: 5px;
  margin: 10px 0;
`;

export const Result = styled.div`
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  text-align: center;
`;

export const ResultTitle = styled(Result)`
  font-weight: 400;
  text-align: right;
`;

export const ResultUnit = styled(Result)`
  font-size: 12px;
  line-height: 14px;
  font-weight: 200;
  text-align: left;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SaveButton = styled.button<{ inActive: boolean }>`
  height: 36px;
  width: calc(50% - 5px);
  max-width: 100%;
  box-sizing: border-box;
  background: ${lightPurple};
  border: 1px solid ${mediumPurple};
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  line-height: 20px;
  color: ${({ inActive }) => (inActive ? `${mediumPurple}` : `${purple}`)};
  margin: 60px 0 5px;

  :hover {
    box-shadow: 0 0 5px 1px ${mediumPurple};
  }

  ${HoverAnimation}
`;

export const LinkToProfile = styled(Link)`
  height: 36px;
  width: calc(50% - 5px);
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${lightPurple};
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  line-height: 20px;
  color: ${purple};
  text-decoration: none;
  margin: 60px 0 5px;

  :hover {
    box-shadow: 0 0 5px 1px ${mediumPurple};
  }

  ${HoverAnimation}
`;
