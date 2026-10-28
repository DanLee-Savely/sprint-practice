import { users } from "./data.js";
import { findUserByEmail } from "./repository.js";
import type { inputUserType, userDataType } from "./types.js";

export const singUp = (user: inputUserType): boolean => {
  const foundUser = findUserByEmail(user.email);

  if (foundUser === null) {
    users.push(user);
    return true;
  } else {
    return false;
  }
};

export const login = (email: string, password: string): null | userDataType => {
  const foundUser = findUserByEmail(email);
  if (foundUser === null) {
    return null;
  }
  if (foundUser.password !== password) {
    return null;
  }

  return foundUser;
};
