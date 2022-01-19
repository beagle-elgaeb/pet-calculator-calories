import rout from "express";
import { editUser, getUser, editPassword } from "../controllers/users";
import { validEditedUserData, validEditedPassword } from "../middlewares/validation";

const router = rout.Router();

router.get("/me", getUser);
router.patch("/me", validEditedUserData, editUser);
router.patch("/me-pass", validEditedPassword, editPassword);

export default router;
