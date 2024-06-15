import express from "express";
import {
  getUSerById,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";
const router = express.Router();

//get all users in the db
router.get("/", getUsers);

//get user by id
router.get("/getUserById/:id", getUSerById);

//create a new user
router.post("/createUser", createUser);

//update user by id
router.put("/userById/:id", updateUser);

//delete user by id
router.delete("/deleteById/:id", deleteUser);

export default router;
