import express from "express";
import {
  create,
  getAll,
  getOne,
  remove,
  update,
} from "../controllers/students.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
