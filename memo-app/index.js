import PromptSync from "prompt-sync";

const prompt = PromptSync();

while (true) {
  const answer = prompt("메뉴: 로그인, 회원가입, 종료: ");
  if (answer === "로그인") {
    console.log("로그인 완료");
  } else if (answer === "회원가입") {
    // 퀴즈
    // 유저에게 이메일, 비밀번호, 이름, 나이, 결혼여부, 총 5가지 정보를 물어보세요.
    // 유저가 입력을 해주면 그것을 전부 출력해주세요.
    // 출력 예시: 유저의 이메일: asd@asd.com
    // 전부 출력한 후 회원가입 완료라고 출력하면 됩니다.
    console.log("회원가입 완료");
  } else if (answer === "종료") {
    break
  } else {
    console.log("입력이 잘못되었습니다.");
  }
}
console.log("프로그램을 종료합니다");
