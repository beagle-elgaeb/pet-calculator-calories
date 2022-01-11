import { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../redux/types";
import { formatDate } from "../../utils/lingvo";
import { calcTotalParameters } from "../../utils/math";
import { MealsProps } from "../../utils/types";
import Meal from "../Meal/Meal";
import Infographics from "./Infographics";
import {
  MealsContainer,
  OpenDataButton,
  OpenDataButtonIcon,
  Subtitle,
  Total,
  TotalCalories,
  Totals,
  TotalsSubtitle,
} from "./Meals.style";

function Meals({ date, handleMealClick }: MealsProps) {
  const [openData, setOpenData] = useState(false);

  const meals = useSelector((state: State) => state.meals);

  const mealsInDay = meals.filter(
    (meal) => formatDate(meal.timestamp) === formatDate(date)
  );

  const {
    mealsByDay,
    summCalories,
    summProtein,
    summFat,
    summCarb,
    summWeight,
  } = calcTotalParameters(mealsInDay, date);

  return (
    <>
      <OpenDataButton type="button" onClick={() => setOpenData(!openData)}>
        <OpenDataButtonIcon openData={openData}></OpenDataButtonIcon>
        {openData ? "Свернуть" : "Подробнее"}
      </OpenDataButton>
      {openData ? (
        <>
          <MealsContainer>
            {mealsByDay[date].map((meal, i) => (
              <Meal key={i} meal={meal} handleMealClick={handleMealClick} />
            ))}
          </MealsContainer>
          <TotalsSubtitle>
            <Subtitle>вес</Subtitle>
            <Subtitle>белки</Subtitle>
            <Subtitle>жиры</Subtitle>
            <Subtitle>угл-ды</Subtitle>
            <Subtitle>ккал</Subtitle>
          </TotalsSubtitle>
          <Totals>
            <Total>{summWeight} г.</Total>
            <Total>{summProtein} г.</Total>
            <Total>{summFat} г.</Total>
            <Total>{summCarb} г.</Total>
            <TotalCalories>{summCalories}</TotalCalories>
          </Totals>
        </>
      ) : null}

      <Infographics
        summCalories={summCalories}
        summProtein={summProtein}
        summFat={summFat}
        summCarb={summCarb}
        date={date}
      />
    </>
  );
}

export default Meals;
