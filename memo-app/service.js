import { users } from "./data.js";
import { findUserByEmail } from "./repository.js";

export const singUp = (user) => {
  const foundUser = findUserByEmail(user.email);

  if (foundUser === null) {
    users.push(user);
    return true;
  } else {
    return false;
  }
};

export const login = (email, password) => {
  const foundUser = findUserByEmail(email);
  if (foundUser === null) {
    return null;
  }
  if (foundUser.password !== password) {
    return null;
  }

  return foundUser;
};

export const loadMyMemos = (email) => {
  return [];
}
