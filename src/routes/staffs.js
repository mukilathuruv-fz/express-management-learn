import express from "express";
import {
  create,
  getAll,
  getOne,
  remove,
  update,
  login,
} from "../controllers/staffs.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
router.post("/login", login);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
