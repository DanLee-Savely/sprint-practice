import { users } from "./data.js";
import PromptSync from "prompt-sync";

const makeProfile = (user) => {
  if (user.isMarried === true) {
    return `프로필: ${user.name}님은 ${user.age}살입니다.(기혼)`;
  } else {
    return `프로필: ${user.name}님은 ${user.age}살입니다.(미혼)`;
  }
};

console.log("--------------------------------------------------");
// 유저 3명의 프로필 정보를 모두 출력하세요.
// 30000명일때도 동일한 코드로 출력할 수 있어야 합니다.
// 코드는 3줄로 작성하세요.
for (let i = 0; i < users.length; i++) {
  console.log(makeProfile(users[i]));
}

// prompt-sync 사용 예시
const prompt = PromptSync()
const inputEmail = prompt("이메일이 뭐에요?: ")
console.log(`유저가 입력한 이메일: ${inputEmail}`)

// 실전 연습1
// 유저 1명로부터 이름, 나이, 결혼 여부(y, n)를 입력받아보세요.
// 그 유저의 정보를 users 배열에 추가해주세요.
// 4명의 유저 모두의 프로필을 출력해주세요.
const inputName = prompt("이름이 뭐에요?: ")
const inputAge = 27;
let inputIsMarried = prompt("결혼을 했나요?(y/n): ")

if (inputIsMarried === "y") {
  inputIsMarried = true
} else {
  inputIsMarried = false
}

const user4 = {
  name: inputName,
  age: inputAge,
  isMarried: inputIsMarried
}

users.push(user4);

for (let i = 0; i < users.length; i++) {
  console.log(makeProfile(users[i]));
}
