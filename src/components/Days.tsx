import styled from "@emotion/styled/macro";
import { useSelector } from "react-redux";
import { State } from "../redux/types";
import { mediumPurple, purple, white, yellow } from "../styles/colors";
import { Table } from "../styles/patterns";
import Meals from "./Meals";

function Days() {
  const meals = useSelector((state: State) => state.meals);
  const dates = Array.from(new Set(meals.map((meal) => meal.date)));

  return (
    <DaysContainer>
      {dates.map((date, i) => (
        <Day key={i}>
          <DayTitle>{date}</DayTitle>
          <MealTitles>
            <SubTitle>{""}</SubTitle>
            <SubTitle>б</SubTitle>
            <SubTitle>ж</SubTitle>
            <SubTitle>у</SubTitle>
            <SubTitle>к</SubTitle>
          </MealTitles>
          <Meals date={date} />
        </Day>
      ))}
    </DaysContainer>
  );
}

export default Days;

const DaysContainer = styled.div`
  margin: 0;
`;

const Day = styled.div`
  position: relative;
  border: 1px solid ${mediumPurple};
  border-radius: 5px;
  margin: 20px 0;
  padding: 30px 10px;
`;

const DayTitle = styled.h3`
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

const MealTitles = styled.div`
  ${Table}
  justify-items: center;
  margin: 0 0 15px;
`;

const SubTitle = styled.div`
  width: 100%;
  border-right: 1px solid ${mediumPurple};
  font-weight: 600;
  margin: 0;

  :last-child {
    border-right: none;
  }
`;
