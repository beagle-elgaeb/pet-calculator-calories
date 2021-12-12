import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { lightPurple, mediumPurple, purple } from "../styles/colors";
import { HoverAnimation } from "../styles/patterns";

export const NotFoundPageContainer = styled.div`
  height: calc(100vh - 20px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 100px 0 50px;
`;

export const Error = styled.div``;

export const ErrorMessage = styled.p`
  font-size: 18px;
  line-height: 20px;
  font-weight: 300;
  margin: 0;
`;

export const ErrorCode = styled.p`
  font-size: 48px;
  line-height: 50px;
  font-weight: 500;
  margin: 20px 0 0;
`;

export const ReturnButton = styled(Link)`
  height: 36px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: ${lightPurple};
  border: 1px solid ${mediumPurple};
  border-radius: 5px;
  font-size: 18px;
  line-height: 20px;
  color: ${purple};
  text-decoration: none;
  margin: 0;

  :hover {
    box-shadow: 0 0 5px 1px ${mediumPurple};
  }

  ${HoverAnimation}
`;
