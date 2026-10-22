import PromptSync from "prompt-sync";

const prompt = PromptSync();

while (true) {
  const answer = prompt("메뉴: 로그인, 회원가입, 종료: ");
  if (answer === "로그인") {
    console.log("로그인 완료");
  } else if (answer === "회원가입") {
    console.log("회원가입 완료");
  } else {
    break
  }
}
console.log("프로그램을 종료합니다");
