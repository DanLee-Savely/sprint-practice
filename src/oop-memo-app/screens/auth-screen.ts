import PromptSync from "prompt-sync";
import { AuthService } from "../services/auth-service.js";
import type {
  loginFormType,
  signUpFormType,
  userClientType,
} from "../types.js";

const prompt = PromptSync();

export class AuthScreen {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  showLoginForm(): null | userClientType {
    // 입력 받기
    const inputEmail: string = prompt("이메일을 입력해주세요: ");
    const inputPassword: string = prompt("비밀번호를 입력해주세요: ");
    const loginFormData: loginFormType = {
      email: inputEmail,
      password: inputPassword,
    };

    // 로그인 처리
    const loggedInUser = this.authService.login(loginFormData);

    // 결과 보고
    if (loggedInUser === null) {
      console.log("로그인에 실패했어요");
      return null;
    } else {
      console.log("로그인에 성공했어요");
      return loggedInUser;
    }
  }

  showSignUpForm() {
    const inputEmail: string = prompt("이메일을 입력해주세요: ");
    const inputPassword: string = prompt("비밀번호를 입력해주세요: ");
    const inputName: string = prompt("이름을 알려주세요: ");
    const inputAge: number = Number(prompt("나이를 알려주세요: "));
    const inputIsMarriedStr: string = prompt("결혼 유뮤를 알려주세요(y/n): ");

    let inputIsMarried: boolean;
    if (inputIsMarriedStr === "y") {
      inputIsMarried = true;
    } else {
      inputIsMarried = false;
    }

    const signUpFormData: signUpFormType = {
      email: inputEmail,
      password: inputPassword,
      name: inputName,
      age: inputAge,
      isMarried: inputIsMarried,
    };

    // 회원 가입 처리
    const isSignUpSuccess: boolean = this.authService.singUp(signUpFormData);

    // 안내 멘트
    if (isSignUpSuccess) {
      console.log("회원가입에 성공했습니다.");
    } else {
      console.log("이미 존재하는 계정입니다.");
    }
  }
}
