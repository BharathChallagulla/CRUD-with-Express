import express from "express";
import logger from "../middleware/logger.js";
const router = express.Router();

const users = [
  {
    id: 1,
    uname: "bharathChallagulla",
    role: "Software Developer",
  },
  {
    id: 2,
    uname: "vivekChagarlamudi",
    role: "Fullstack Engineer",
  },
];

//get all users in the db
router.get("/", (req, res) => {
  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({
      msg: "Server Error",
      error,
    });
  }
});

//get user by id
router.get("/getUserById/:id", (req, res) => {
  try {
    const id = parseInt(req.query.id);
    const userById = users.filter((x) => x.id === id);
    if (userById) {
      res.status(200).json(userById);
    } else {
      res.status(200).json({
        msg: "User not found",
      });
    }
  } catch (error) {
    res.status(404).json({
      msg: "Error finding user",
      error,
    });
  }
});

router.post("/createUSer", (req, res) => {
  try {
    const user = req.params;
    const id = users.length();
    users.push({
      id: parseInt(id),
      ...user,
    });
    res.status(200).send({ msg: "User Created Successfully" });
  } catch (error) {
    res.status(404).json({
      msg: "CAnnot create use",
      error,
    });
  }
});

router.put("/userById/:id", (req, res) => {
  try {
    const id = parseInt(req.query.id);
    const userById = users.filter((x) => x.id === id);
    if (userById) {
      res.status(200).json(userById);
    } else {
      res.status(200).json({
        msg: "User not found",
      });
    }
  } catch (error) {
    res.status(404).json({
      msg: "Error finding user",
      error,
    });
  }
});

router.delete("/deleteById/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (
      Array.find((x) => {
        x.id === id;
      })
    ) {
      users = users.filter((x) => x.id !== parseInt(id));
      res.status(200).json({
        msg: "User deleted successfully",
      });
    } else {
      res.status(200).json({
        msg: "Invalid Id",
      });
    }
  } catch (error) {
    res.status(404).json({
      msg: "Error finding user",
      error,
    });
  }
});

export default router;
