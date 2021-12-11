import styled from "@emotion/styled/macro";
import { brightPurple, darkYellow, mediumPurple } from "../../styles/colors";
import { HoverAnimation, Table } from "../../styles/patterns";

export const MealsContainer = styled.div`
  margin: 0;
`;

export const Meal = styled.div`
  ${Table}
  justify-items: start;
  padding: 0 0 6px 0;

  :last-child {
    padding: 0;
  }
`;

export const Parametr = styled.div`
  width: 100%;
  border-right: 1px solid ${mediumPurple};
  font-size: 14px;
  line-height: 16px;
  font-weight: 300;
  margin: 0;

  :last-child {
    border-right: none;
  }
`;

export const Totals = styled.div`
  ${Table}
  justify-items: center;
  padding: 15px 0 0;
`;

export const Total = styled.div`
  width: 100%;
  border-right: 1px solid ${mediumPurple};
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  color: ${brightPurple};
  margin: 0;

  :last-child {
    border-right: none;
  }
`;

export const TotalCalories = styled(Total)`
  color: ${darkYellow};
`;

export const DeleteButton = styled.button`
  height: 13px;
  width: 13px;
  background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0) 8px,
      ${darkYellow} 8px,
      ${darkYellow} 10px,
      rgba(255, 255, 255, 0) 10px,
      rgba(255, 255, 255, 0) 18px
    ),
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0) 8px,
      ${darkYellow} 8px,
      ${darkYellow} 10px,
      rgba(255, 255, 255, 0) 10px,
      rgba(255, 255, 255, 0) 18px
    );
  border: none;
  border-radius: 2px;
  outline: none;
  margin: 0 auto;

  :hover {
    transform: rotate(10deg);
  }

  ${HoverAnimation}
`;
