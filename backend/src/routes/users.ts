import rout from "express";
import { editUser, getUser, editPassword } from "../controllers/users";
import { validateEditedUserData, validateEditedPassword } from "../middlewares/validation";

const router = rout.Router();

router.get("/me", getUser);
router.patch("/me", validateEditedUserData, editUser);
router.patch("/me-pass", validateEditedPassword, editPassword);

export default router;
