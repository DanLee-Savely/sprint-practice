import PromptSync from "prompt-sync";
const prompt = PromptSync();
export class AuthScreen {
  // 인스턴스 속성(데이터)
  // 생성자
  constructor() {}
  // 인스턴스 메소드(행동)
  showLoginForm() {
    const inputEmail = prompt("이메일을 입력해주세요: ");
    const inputPassword = prompt("비밀번호를 입력해주세요: ");
  }
}
//# sourceMappingURL=auth-screen.js.map
