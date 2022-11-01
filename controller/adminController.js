import { adminModel } from "../model/adminModel.js";
import jwt from "jsonwebtoken";
const SECRET_KEY = "deepuguptadeepuguptadeepugupta";

class Admin {
  static getAdminData = async (req, res) => {
    try {
      const admindata = await adminModel.find();
      res.send(admindata);
    } catch (error) {
      console.log(error);
    }
  };
  static insertAdmindata = async (req, res) => {
    try {
      const data = req.body;
      const admindata = new adminModel({
        firstname: data.firstname,
        lastname: data.lastname,
        username: data.username,
        password: data.password,
        gender: data.gender,
        adress: data.adress,
        status: data.status,
      });
      const result = await admindata.save();
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  };
  static authentication = async (req, res) => {
    try {
      const data = req.body;
      const admindata = await adminModel.findOne({ username: data.username });
      if (admindata) {
        if (admindata.password === data.password) {
          const token = jwt.sign({ userid: admindata._id }, SECRET_KEY, {
            expiresIn: "5d",
          });
          res.send({
            status: "success",
            message: "login successfully",
            token: token,
          });
        } else {
          res.send({
            status: "failed",
            message: "invalid username and password",
          });
        }
      } else {
        res.send({
          status: "failed",
          message: "invalid username and password",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  static getLogedData = async (req, res) => {
    try {
      const data = req.body;
      const logedindata = jwt.verify(data.token, SECRET_KEY);
      const result = await adminModel.findById(logedindata.userid);
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  };
}

export default Admin;
