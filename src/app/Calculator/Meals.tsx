import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../redux/mealSlise";
import { MealItem, State } from "../../redux/types";
import { formatDate } from "../../utils/lingvo";
import { calcTotalParameters } from "../../utils/math";
import { MealsProps } from "../../utils/types";
import Infographics from "./Infographics";
import {
  DeleteButton,
  Meal,
  MealName,
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
  const dispatch = useDispatch();

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

  function handleRemoveMeal(meal: MealItem) {
    dispatch(remove({ id: meal.id }));
  }

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
              <Meal key={i}>
                <MealName onClick={() => handleMealClick(meal)}>
                  {meal.name} ({meal.weight} г.)
                </MealName>
                <DeleteButton
                  type="button"
                  onClick={() => handleRemoveMeal(meal)}
                  aria-label="Удалить приём пищи"
                ></DeleteButton>
              </Meal>
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
