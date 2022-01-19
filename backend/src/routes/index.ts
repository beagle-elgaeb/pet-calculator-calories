import rout from "express";
import { notFound } from "../constants";
import { createUser, login, logout, deleteUser } from "../controllers/auth";
import NotFoundError from "../errors/NotFoundErr";
import auth from "../middlewares/auth";
import { validateLogin, validateNewUser } from "../middlewares/validation";
import mealsRouter from "./meals";
import targetRouter from "./target";
import usersRouter from "./users";

const routes = rout.Router();

routes.post("/signup", validateNewUser, createUser);
routes.post("/signin", validateLogin, login);
routes.post("/signout", logout);

routes.delete("/delete", auth, deleteUser);

routes.use("/users", auth, usersRouter);
routes.use("/meals", auth, mealsRouter);
routes.use("/targets", auth, targetRouter);

routes.use("/*", auth, () => {
  throw new NotFoundError(notFound);
});

export default routes;
