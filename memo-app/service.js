import { users } from "./data.js";

export const singUp = (user) => {
  let isSignedUp = false;

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === user.email) {
      isSignedUp = true;
      break;
    }
  }

  if (isSignedUp === true) {
    return false;
  } else {
    users.push(user);
    return true;
  }
};
