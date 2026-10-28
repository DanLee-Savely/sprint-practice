import { users } from "./data.js";
import type { userDataType } from "./types.js";

// 함수
function addOne(x: number): number {
  return x + 1;
}
console.log(addOne(10));

// 익명 함수
const addTwo = function (x: number): number {
  return x + 2;
};
console.log(addTwo(10));

// 화살표 익명 함수
const addThree = (x: number): number => {
  return x + 3;
};
console.log(addThree(10));

// 화살표 익명 함수
const addFour = (x: number): number => x + 4;
console.log(addFour(10));

// 실전 연습
const makeProfile = (user: userDataType): string => {
  if (user.isMarried === true) {
    return `프로필: ${user.name}님은 ${user.age}살입니다.(기혼)`;
  } else {
    return `프로필: ${user.name}님은 ${user.age}살입니다.(미혼)`;
  }
};
console.log(makeProfile(users[0]!));
console.log(makeProfile(users[1]!));
console.log(makeProfile(users[2]!));
