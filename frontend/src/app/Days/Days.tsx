import { useSelector } from "react-redux";
import { State } from "../../redux/types";
import { formatDate, setStartDay } from "../../utils/lingvo";
import { DaysProps } from "../../utils/types";
import { Day, DaysContainer, DayTitle } from "./Days.styles";
import Meals from "./Meals";

function Days({ handleMealClick }: DaysProps) {
  const meals = useSelector((state: State) => state.meals);
  const dates = Array.from(
    new Set(meals.map((meal) => setStartDay(meal.timestamp)))
  );

  return (
    <DaysContainer>
      {dates.map((date, i) => (
        <Day key={i}>
          <DayTitle>{formatDate(date)}</DayTitle>
          <Meals date={date} handleMealClick={handleMealClick} />
        </Day>
      ))}
    </DaysContainer>
  );
}

export default Days;
