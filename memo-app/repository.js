import { users } from "./data.js";

export const findUserByEmail = (email) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return users[i];
    }
  }

  return null;
};
