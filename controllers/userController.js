import * as UserService from "../services/userService.js";

const UserController = {
  getAllUsers: (req, res) => {
    const users = UserService.getAllUsers();
    res.json(users);
  },
  createUser: (req, res) => {
    const { name, email } = req.body;
    const newUser = UserService.createUser(name, email);
    res.status(201).json(newUser);
  },
  getUserById: (req, res) => {
    const userId = req.params.id;
    const user = UserService.getUserById(userId);
    res.json(user);
  },
  updateUser: (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    const updatedUser = UserService.updateUser(userId, name, email);
    res.json(updatedUser);
  },
  deleteUser: (req, res) => {
    const userId = req.params.id;
    UserService.deleteUser(userId);
    res.sendStatus(204);
  }
};

export default UserController;
