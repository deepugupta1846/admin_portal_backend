import express from "express";
import Admin from "../controller/adminController.js";
import UserController from "../controller/userController.js";
const route = express();

route.get("/admin", Admin.getAdminData);
route.post("/admin", Admin.insertAdmindata);
route.post("/admin/login", Admin.authentication);
route.get("/admin/login", Admin.getLogedData);
route.post("/adduser", UserController.addusers);
route.get("/users", UserController.getUser);
route.post("/users/:id", UserController.updateUser);
route.delete("/users/:id", UserController.deleteUser);
export default route;
