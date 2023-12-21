import { Schema, model } from "mongoose";

const courseSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },

    fees: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },

    handledBy: {
      type: [Schema.ObjectId],
      ref: "Staff",
    },
  },
  {
    timestamps: true,
    overwriteModels: true,
  }
);

const Course = model("Course", courseSchema);

export default Course;
