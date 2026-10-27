import PromptSync from "prompt-sync";
import { AuthService } from "../auth-service.js";

const prompt = PromptSync();

export class AuthScreen {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  showLoginForm() {
    const inputEmail: string = prompt("이메일을 입력해주세요: ");
    const inputPassword: string = prompt("비밀번호를 입력해주세요: ");
    const loginFormData = {
      email: inputEmail,
      password: inputPassword,
    };

    // 서비스 직원분에게 제출해서 로그인에 성공하면 유저 정보를 알려주세요.
    this.authService.login(loginFormData);

    // 받은 유저 정보를 사용해서 안내 멘트를 합니다.
  }

  showSignUpForm() {
    const inputEmail: string = prompt("이메일을 입력해주세요: ");
    const inputPassword: string = prompt("비밀번호를 입력해주세요: ");
    const inputName: string = prompt("이름을 알려주세요: ");
    const inputAge: number = Number(prompt("나이를 알려주세요: "));
    const inputIsMarriedStr: string = prompt("결혼 유뮤를 알려주세요(y/n): ");
  }
}
