import Course from "../models/course.js";
import _ from "lodash";

const fields = ["title", "fees", "duration", "handledBy", "_id"];

export const create = async (req, res) => {
  try {
    const body = req.body;
    console.log({ body });
    const course = new Course({ ...body });
    await course.save();
    return res.status(201).json(course);
  } catch (error) {
    return res.status(500).json({
      message: error.message || "something went wrong",
    });
  }
};
export const getAll = async (req, res) => {
  try {
    console.log("entry of getting");
    const courses = await Course.find();

    if (courses.length) {
      const response = courses.map(course => _.pick(course, fields));
      return res.status(200).json(response);
    } else {
      return res.status(404).json({
        message: "No courses found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message || "something went wrong",
    });
  }
};
export const getOne = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      message: error.message || "something went wrong",
    });
  }
};
export const update = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      message: error.message || "something went wrong",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const id = req.params?.id;
    const course = await Course.findByIdAndDelete(id, {
      new: true,
    });
    if (course) {
      return res.status(200).json({
        message: `${course?.title || ""} course  deleted successfully`,
      });
    }
    return res.status(400).json({
      message: `Course Named  is Not Found`,
    });
  } catch (error) {
    return res.status(500).json({
      message: error || "something went wrong",
    });
  }
};
