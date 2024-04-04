// userService.js

import User from '../models/userModel.js';

const users = [];

export const UserService = {
  getAllUsers: () => users,
  createUser: (name, email) => {
    const user = new User(users.length + 1, name, email);
    users.push(user);
    return user;
  },
  getUserById: (id) => users.find(user => user.id === parseInt(id)),
  updateUser: (id, name, email) => {
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    if (userIndex !== -1) {
      users[userIndex].name = name;
      users[userIndex].email = email;
      return users[userIndex];
    }
  },
  deleteUser: (id) => {
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
    }
  }
};
