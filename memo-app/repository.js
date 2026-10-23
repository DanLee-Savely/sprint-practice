import { memos, users } from "./data.js";

export const findUserByEmail = (email) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return users[i];
    }
  }

  return null;
};

export const loadMemosByEmail = (email) => {
  const myMemos = [];

  for (let i = 0; i < memos.length; i++) {
    if (memos[i].email === email) {
      myMemos.push(memos[i]);
    }
  }

  return myMemos;
};
