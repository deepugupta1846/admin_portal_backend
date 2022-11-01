import { query } from "express";
import { userModel } from "../model/userModel.js";

class UserController {
  static addusers = async (req, res) => {
    try {
      const user = new userModel(req.body);
      const result = await user.save();
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  };
  static getUser = async (req, res) => {
    try {
      const PAGE_SIZE = 10;
      const page = parseInt(req.query.page || "0");

      const total = await userModel.countDocuments();
      const result = await userModel
        .find()
        .limit(PAGE_SIZE)
        .skip(PAGE_SIZE * page);
      res.send({ result: result, total_pages: Math.ceil(total / PAGE_SIZE) });
    } catch (error) {
      console.log(error);
    }
  };
  static updateUser = async (req, res) => {
    try {
      console.log(req.body);
      console.log(req.params.id);
      const result = await userModel.findByIdAndUpdate(req.params.id, req.body);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  static deleteUser = async (req, res) => {
    try {
      const res = await userModel.findByIdAndDelete(req.params.id);
      res.send(res);
    } catch (error) {
      console.log(error);
    }
  };
}
export default UserController;
