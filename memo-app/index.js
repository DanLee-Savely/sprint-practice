import PromptSync from "prompt-sync";
import { users } from "./data.js";
import { singUp } from "./service.js";

const prompt = PromptSync();

while (true) {
  const answer = prompt(
    `메뉴(현재 사용자 ${users.length}명): 로그인, 회원가입, 종료: `,
  );
  if (answer === "로그인") {
    // 1. 유저로부터 이메일, 비밀번호를 입력받아주세요.
    // 2. 이메일, 비밀번호를 사용해서 로그인을 시도해주세요.
    //    - 입력받은 이메일을 가진 유저가 있는지 찾아본다.
    //    - 그런 유저가 없다면: 로그인 실패
    //    - 그런 유저가 있다면: 비밀번호가 일치하는지 체크해보자.
    //      - 비밀번호가 일치하지 않는다면: 로그인 실패
    //      - 비밀번호가 일치한다면: 로그인 성공
    // 3. 로그인에 성공했는지 실패했는지 여부를 가지고 안내 멘트를 출력합니다.
    //   - 성공한 경우: "안녕하세요 민지님"이라고 안내 멘트를 출력하고 프로그램을 종료해주세요.
    //   - 실패한 경우: "로그인에 실패했어요"라고 안내 멘트를 출력하고 메뉴로 돌아가주세요.
  } else if (answer === "회원가입") {
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

    const isSignUpSuccess = singUp(user);
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
}
console.log("프로그램을 종료합니다");
