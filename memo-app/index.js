import PromptSync from "prompt-sync";

const prompt = PromptSync();

while (true) {
  const answer = prompt("메뉴: 로그인, 회원가입, 종료: ");
  if (answer === "로그인") {
    console.log("로그인 완료");
  } else if (answer === "회원가입") {
    // 퀴즈
    // 유저에게 이메일, 비밀번호, 이름, 나이, 결혼여부, 총 5가지 정보를 물어보세요.
    // 유저가 입력을 모두 받아서 user 객체를 만들어주세요.
    // user 객체를 통째로 출력하면 됩니다.
    // 나이는 숫자로 해야합니다.
    // 결혼 여부는 true, false로 해주세요.
    // 전부 출력한 후 회원가입 완료라고 출력하면 됩니다.
    console.log("회원가입 완료");
  } else if (answer === "종료") {
    break
  } else {
    console.log("입력이 잘못되었습니다.");
  }
}
console.log("프로그램을 종료합니다");
