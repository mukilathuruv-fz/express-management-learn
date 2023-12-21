import express from "express";
import {
  create,
  getAll,
  getOne,
  remove,
  update,
} from "../controllers/course.js";
import auth from "../middlewares/auth.js";
import hasRole from "../middlewares/hasRole.js";
const router = express.Router();

router.get("/", auth, hasRole("admin", "trainer"), getAll);
router.get("/:id", getOne);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
