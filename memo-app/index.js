import PromptSync from "prompt-sync";

const prompt = PromptSync();

while (true) {
  const answer = prompt("메뉴: 로그인, 회원가입, 종료: ");
  // 만약에 메뉴에 없는 글자를 입력한 경우, "입력이 잘못되었습니다"라고 출력하고 다시 처음으로 돌아가주세요.
  if (answer === "로그인") {
    console.log("로그인 완료");
  } else if (answer === "회원가입") {
    console.log("회원가입 완료");
  } else if (answer === "종료") {
    break
  } else {
    console.log("입력이 잘못되었습니다.");
  }
}
console.log("프로그램을 종료합니다");
