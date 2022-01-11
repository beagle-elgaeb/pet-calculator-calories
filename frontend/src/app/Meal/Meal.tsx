import { useDispatch } from "react-redux";
import { remove } from "../../redux/mealSlise";
import { MealItem } from "../../redux/types";
import { MealProps } from "../../utils/types";
import { DeleteButton, MealContainer, MealName } from "./Meal.style";

function Meal({ meal, handleMealClick }: MealProps) {
  const dispatch = useDispatch();

  function handleRemoveMeal(meal: MealItem) {
    dispatch(remove({ id: meal.id }));
  }

  return (
    <MealContainer>
      <MealName onClick={() => handleMealClick(meal)}>
        {meal.name} ({meal.weight} г.)
      </MealName>
      <DeleteButton
        type="button"
        onClick={() => handleRemoveMeal(meal)}
        aria-label="Удалить приём пищи"
      ></DeleteButton>
    </MealContainer>
  );
}

export default Meal;
