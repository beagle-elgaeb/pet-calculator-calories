import rout from "express";
import { addMeal, deleteMeal, editMeal, getMeals } from "../controllers/meals";
import {
  validAddedMeal,
  validEditedMeal,
  validMealId,
} from "../middlewares/validation";

const router = rout.Router();

router.get("/", getMeals);
router.post("/", validAddedMeal, addMeal);
router.patch("/:id", validEditedMeal, editMeal);
router.delete("/:id", validMealId, deleteMeal);

export default router;
