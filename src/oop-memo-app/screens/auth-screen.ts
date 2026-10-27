import PromptSync from "prompt-sync";

const prompt = PromptSync();

export class AuthScreen {
  // 인스턴스 속성(데이터)

  // 생성자
  constructor() {}

  // 인스턴스 메소드(행동)
  showLoginForm() {
    const inputEmail: string = prompt("이메일을 입력해주세요: ");
    const inputPassword: string = prompt("비밀번호를 입력해주세요: ");
  }

  showSignUpForm() {
    const inputEmail: string = prompt("이메일을 입력해주세요: ");
    const inputPassword: string = prompt("비밀번호를 입력해주세요: ");
    const inputName: string = prompt("이름을 알려주세요: ");
    const inputAge: number = Number(prompt("나이를 알려주세요: "));
    const inputIsMarriedStr: string = prompt("결혼 유뮤를 알려주세요(y/n): ");
  }
}
