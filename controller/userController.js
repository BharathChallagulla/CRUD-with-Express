let users = [
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

// @desc To get all users
// @route /users
const getUsers = (req, res) => {
  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({
      msg: "Server Error",
      error,
    });
  }
};

// @desc To get single user by id
// @route /users/getUserById/:id
const getUSerById = (req, res) => {
  try {
    const id = parseInt(req.query.id);
    const userById = users.filter((x) => x.id === id);
    if (userById) {
      res.status(200).json(userById);
    } else {
      res.status(200).json({
        msg: `User not found by given id ${id}`,
      });
    }
  } catch (error) {
    res.status(404).json({
      msg: "Error finding user",
      error,
    });
  }
};

// @desc To create user
// @route /users/createUser
const createUser = (req, res) => {
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
};

// @desc To update single user by id
// @route /users/userById/:id
const updateUser = (req, res) => {
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
};

// @desc To delete user using id
// @route /users/deleteById/:id
const deleteUser = (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (users.find((x) => x.id === id)) {
      users = users.filter((x) => x.id !== id);
      res.status(200).json({
        msg: "User deleted successfully",
      });
    } else {
      res.status(200).json({
        msg: "Invalid Id",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      msg: "Error finding user",
      error,
    });
  }
};

export { getUsers, getUSerById, createUser, updateUser, deleteUser };
