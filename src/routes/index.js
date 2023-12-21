import express from "express";
import studentsRouter from "./students.js";
import staffsRouter from "./staffs.js";
import coursesRouter from "./courses.js";
const router = express.Router();

// router.get("/", async (req, res, next) => {
//   return res.status(200).json({
//     message: "home page",
//   });
// });
// router.get("/*", async (req, res, next) => {
//   return res.status(404).json({
//     message: "unknown page",
//   });
// });

router.use("/api/v1/students", studentsRouter);
router.use("/api/v1/staffs", staffsRouter);
router.use("/api/v1/courses", coursesRouter);

export default router;
