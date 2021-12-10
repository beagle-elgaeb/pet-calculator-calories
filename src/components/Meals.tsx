import styled from "@emotion/styled/macro";
import { useDispatch, useSelector } from "react-redux";
import { MealItem, State } from "../redux/types";
import { brightPurple, darkYellow, mediumPurple } from "../styles/colors";
import { HoverAnimation, Table } from "../styles/patterns";
import { remove } from "../redux/mealSlise";

function Meals({ date }: { date: string }) {
  const meals = useSelector((state: State) => state.meals);

  let mealsByDay = {} as Record<string, MealItem[]>;

  const mealsInDay = meals.filter((meal) => meal.date === date);

  let summCalories = 0;
  let summProtein = 0;
  let summFat = 0;
  let summCarb = 0;
  let summWeight = 0;

  mealsInDay.forEach((meal) => {
    summCalories = summCalories + meal.calories!;
    summProtein = summProtein + meal.protein!;
    summFat = summFat + meal.fat!;
    summCarb = summCarb + meal.carb!;
    summWeight = summWeight + meal.weight!;
  });

  mealsByDay = { ...mealsByDay, [date]: mealsInDay };

  const dispatch = useDispatch();

  function handleRemoveTask(meal: MealItem) {
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
                onClick={() => handleRemoveTask(meal)}
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
        <Total>{Math.round(summWeight)} г.</Total>
        <Total>{Math.round(summProtein)}</Total>
        <Total>{Math.round(summFat)}</Total>
        <Total>{Math.round(summCarb)}</Total>
        <TotalCalories>{summCalories}</TotalCalories>
      </Totals>
    </>
  );
}

export default Meals;

const MealsContainer = styled.div`
  margin: 0;
`;

const Meal = styled.div`
  ${Table}
  justify-items: start;
  padding: 0 0 6px 0;

  :last-child {
    padding: 0;
  }
`;

const Parametr = styled.div`
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

const Totals = styled.div`
  ${Table}
  justify-items: center;
  padding: 15px 0 0;
`;

const Total = styled.div`
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

const TotalCalories = styled(Total)`
  color: ${darkYellow};
`;

const DeleteButton = styled.button`
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
