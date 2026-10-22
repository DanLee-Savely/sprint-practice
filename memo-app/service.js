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
