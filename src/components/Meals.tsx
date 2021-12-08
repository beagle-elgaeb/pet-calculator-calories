import styled from "@emotion/styled/macro";
import { useSelector } from "react-redux";
import { MealItem, State } from "../redux/types";
import { darkYellow, mediumPurple } from "../styles/colors";
import { table } from "../styles/patterns";

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

  return (
    <>
      <MealsContainer>
        {mealsByDay[date].map((meal, i) => (
          <Meal key={i}>
            <Parametr>{meal.calories}</Parametr>
            <Parametr>{(meal.protein! * meal.weight!) / 100}</Parametr>
            <Parametr>{(meal.fat! * meal.weight!) / 100}</Parametr>
            <Parametr>{(meal.carb! * meal.weight!) / 100}</Parametr>
            <Parametr>{meal.weight}</Parametr>
          </Meal>
        ))}
      </MealsContainer>
      <Totals>
        <Total>{summCalories}</Total>
        <Total>{summProtein}</Total>
        <Total>{summFat}</Total>
        <Total>{summCarb}</Total>
        <Total>{summWeight}</Total>
      </Totals>
    </>
  );
}

export default Meals;

const MealsContainer = styled.div`
  margin: 0;
`;

const Meal = styled.div`
  ${table}
  justify-items: start;
  padding: 0 10px 6px 10px;

  :last-child {
    padding: 0 10px;
  }
`;

const Parametr = styled.div`
  width: 100%;
  border-right: 1px solid ${mediumPurple};
  margin: 0;

  :last-child {
    border-right: none;
  }
`;

const Totals = styled.div`
  ${table}
  justify-items: center;
  padding: 10px;
`;

const Total = styled.div`
  width: 100%;
  border-right: 1px solid ${mediumPurple};
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
  color: ${darkYellow};
  margin: 0;

  :last-child {
    border-right: none;
  }
`;
