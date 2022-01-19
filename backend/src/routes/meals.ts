import rout from "express";
import { addMeal, deleteMeal, editMeal, getMeals } from "../controllers/meals";
import {
  validateAddedMeal,
  validateEditedMeal,
  validateMealId,
} from "../middlewares/validation";

const router = rout.Router();

router.get("/", getMeals);
router.post("/", validateAddedMeal, addMeal);
router.patch("/:id", validateEditedMeal, editMeal);
router.delete("/:id", validateMealId, deleteMeal);

export default router;
