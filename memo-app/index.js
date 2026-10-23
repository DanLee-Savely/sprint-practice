import PromptSync from "prompt-sync";
import { users } from "./data.js";
import { login, singUp } from "./service.js";
import { loadMemosByEmail } from "./repository.js";

const prompt = PromptSync();

let loggedInUser = null;

while (true) {
  const answer = prompt(
    `메뉴(현재 사용자 ${users.length}명): 로그인, 회원가입, 종료: `,
  );
  if (answer === "로그인") {
    // 입력 받기
    const inputEmail = prompt("이메일을 입력해주세요: ");
    const inputPassword = prompt("비밀번호를 입력해주세요: ");

    // 로그인 처리
    loggedInUser = login(inputEmail, inputPassword);

    // 안내 멘트
    if (loggedInUser === null) {
      console.log("로그인에 실패했어요");
    } else {
      console.log(`안녕하세요 ${loggedInUser.name}님`);
      break;
    }
  } else if (answer === "회원가입") {
    // 입력 받기
    const inputEmail = prompt("이메일을 입력해주세요: ");
    const inputPassword = prompt("비밀번호를 입력해주세요: ");
    const inputName = prompt("이름을 알려주세요: ");
    const inputAge = Number(prompt("나이를 알려주세요: "));
    let inputIsMarried = prompt("결혼 유뮤를 알려주세요(y/n): ");
    if (inputIsMarried === "y") {
      inputIsMarried = true;
    } else {
      inputIsMarried = false;
    }

    const user = {
      email: inputEmail,
      password: inputPassword,
      name: inputName,
      age: inputAge,
      isMarried: inputIsMarried,
    };

    // 회원 가입 처리
    const isSignUpSuccess = singUp(user);

    // 안내 멘트
    if (isSignUpSuccess) {
      console.log("회원가입에 성공했습니다.");
    } else {
      console.log("이미 존재하는 계정입니다.");
    }
  } else if (answer === "종료") {
    break;
  } else {
    console.log("입력이 잘못되었습니다.");
  }

  console.log();
}

while (loggedInUser !== null) {
  console.log(`안녕하세요 ${loggedInUser.name}님`);
  const answer = prompt("메뉴: 메모 읽기, 메모 쓰기, 종료: ");
  if (answer === "메모 읽기") {
    // 메모 불러오기
    const myMemos = loadMemosByEmail(loggedInUser.email);

    // 메모 출력하기
    for (let i = 0; i < myMemos.length; i++) {
      console.log(`제목: ${myMemos[i].title}\n내용: ${myMemos[i].content}\n`);
    }
  } else if (answer === "메모 쓰기") {
    // 입력 받기
    const inputTitle = prompt("제목을 입력해주세요: ");
    const inputContent = prompt("내용을 입력해주세요: ");

    const memo = {
      title: inputTitle,
      content: inputContent,
    };

    // 메모 추가

    // 안내 멘트
    console.log("메모 쓰기 성공");
  } else if (answer === "종료") {
    break;
  }
}

console.log("프로그램을 종료합니다");
