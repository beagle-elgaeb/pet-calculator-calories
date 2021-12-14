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
  MealsContainer,
  Parametr,
  Total,
  TotalCalories,
  Totals,
} from "./Meals.style";

function Meals({ date }: MealsProps) {
  const dispatch = useDispatch();

  const meals = useSelector((state: State) => state.meals);

  const mealsInDay = meals.filter(
    (meal) => formatDate(meal.timestamp) === date
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
      <MealsContainer>
        {mealsByDay[date].map((meal, i) => (
          <Meal key={i}>
            <Parametr>
              <DeleteButton
                type="button"
                onClick={() => handleRemoveMeal(meal)}
                aria-label="Удалить приём пищи"
              ></DeleteButton>
            </Parametr>
            <Parametr>{meal.protein}</Parametr>
            <Parametr>{meal.fat}</Parametr>
            <Parametr>{meal.carb}</Parametr>
            <Parametr>{meal.calories}</Parametr>
          </Meal>
        ))}
      </MealsContainer>
      <Totals>
        <Total>{summWeight} г.</Total>
        <Total>{summProtein}</Total>
        <Total>{summFat}</Total>
        <Total>{summCarb}</Total>
        <TotalCalories>{summCalories}</TotalCalories>
      </Totals>
      <Infographics summCalories={summCalories} date={date} />
    </>
  );
}

export default Meals;
