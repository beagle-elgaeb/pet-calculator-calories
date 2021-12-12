import styled from "@emotion/styled/macro";
import { mediumPurple, purple, white, yellow } from "../../styles/colors";
import { TablePattern } from "../../styles/patterns";

export const DaysContainer = styled.div`
  margin: 0;
`;

export const Day = styled.div`
  position: relative;
  border: 1px solid ${mediumPurple};
  border-radius: 5px;
  margin: 20px 0;
  padding: 30px 10px 20px;
`;

export const DayTitle = styled.h3`
  position: absolute;
  top: -12px;
  left: 10px;
  background: ${white};
  font-size: 20px;
  line-height: 22px;
  font-weight: 400;
  color: ${yellow};
  text-shadow: 0 1px 1px ${purple};
  margin: 0;
  padding: 0 10px;
`;

export const MealTitles = styled.div`
  ${TablePattern}
  justify-items: center;
  margin: 0 0 15px;
`;

export const SubTitle = styled.div`
  width: 100%;
  border-right: 1px solid ${mediumPurple};
  font-weight: 600;
  margin: 0;

  :last-child {
    border-right: none;
  }
`;
