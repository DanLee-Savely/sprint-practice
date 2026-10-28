import type { userDataType } from "./types.js";

const user1: userDataType = {
  name: "김민수",
  age: 25,
  isMarried: true,
};
const user2: userDataType = {
  name: "김민지",
  age: 21,
  isMarried: false,
};
const user3: userDataType = {
  name: "김민정",
  age: 19,
  isMarried: false,
};
export const users: userDataType[] = [user1, user2, user3];
