import { useSelector } from "react-redux";
import { State } from "../../redux/types";
import {
  Day,
  DaysContainer,
  DayTitle,
  MealTitles,
  SubTitle,
} from "./Days.styles";
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
