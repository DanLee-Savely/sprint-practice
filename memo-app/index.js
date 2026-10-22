import PromptSync from "prompt-sync";

const prompt = PromptSync();

// 데이터
const users = [];

while (true) {
  const answer = prompt(`메뉴(현재 사용자 ${users.length}명): 로그인, 회원가입, 종료: `);
  if (answer === "로그인") {
    console.log("로그인 완료");
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
    }

    console.log(user);
    users.push(user);
    console.log("회원가입 완료");
  } else if (answer === "종료") {
    break;
  } else {
    console.log("입력이 잘못되었습니다.");
  }
}
console.log("프로그램을 종료합니다");
