import rout from "express";
import { getTargets } from "../controllers/targets";

const router = rout.Router();

router.get("/", getTargets);

export default router;
