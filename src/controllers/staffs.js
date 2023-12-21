import Staff from "../models/staff.js";
import { hash, compare } from "bcrypt";

import json from "jsonwebtoken";

export const create = async (req, res) => {
  try {
    const body = req.body;
    const staff = new Staff({ ...body });

    const plainPassword = body.password;
    const hashedPassword = await hash(plainPassword, 10);
    staff.password = hashedPassword;
    await staff.save();
    return res.status(201).json(staff);
  } catch (error) {
    return res.status(500).json({
      message: error.message || "something went wrong",
    });
  }
};
export const login = async (req, res) => {
  try {
    const body = req.body;

    const staff = await Staff.findOne({
      $or: [
        {
          email: body.email,
        },
        { mobile: body.mobile },
      ],
    });
    if (staff) {
      const hashedPassword = staff.password;
      const newPassword = req.body.password;

      const isMatched = await compare(newPassword, hashedPassword);

      if (isMatched) {
        const token = await json.sign({ ...staff }, process.env.TOKEN_SECRET);
        if (token) {
          return res.status(200).json({
            token,
          });
        }
        throw new Error();
      } else {
        return res.status(400).json({
          message: `Password does not match`,
        });
      }
    } else {
      return res.status(400).json({
        message: `Can't find the staff with email ${req.body.email}`,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message || "something went wrong",
    });
  }
};
export const getAll = async (req, res) => {
  try {
    const staffs = await Staff.find();

    if (staffs.length) {
      return res.status(200).json(staffs);
    } else {
      return res.status(404).json({
        message: "No staffs found",
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
    const id = req.params.id;
    const staff = await Staff.findById(id)
      .populate("courseHandling")
      .select(["email"]);
    if (staff) {
      return res.status(200).json(staff);
    } else {
      return res.status(404).json({
        message: "No staff found",
      });
    }
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
  } catch (error) {
    return res.status(500).json({
      message: error.message || "something went wrong",
    });
  }
};
