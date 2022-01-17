import rout from "express";
import { notFound } from "../constants";
import { createUser, login, logout, deleteUser } from "../controllers/auth";
import NotFoundError from "../errors/not-found-err";
import auth from "../middlewares/auth";
import { validLogin, validNewUser } from "../middlewares/validation";
import mealsRouter from "./meals";
import targetRouter from "./target";
import usersRouter from "./users";

const routes = rout.Router();

routes.post("/signup", validNewUser, createUser);
routes.post("/signin", validLogin, login);
routes.post("/signout", logout);

routes.delete("/delete", auth, deleteUser);

routes.use("/users", auth, usersRouter);
routes.use("/meals", auth, mealsRouter);
routes.use("/targets", auth, targetRouter);

routes.use("/*", auth, () => {
  throw new NotFoundError(notFound);
});

export default routes;
