import PromptSync from "inputPrompt-sync";
import { AuthService } from "../services/auth-service.js";
import type {
  loginFormType,
  signUpFormType,
  userClientType,
} from "../types.js";

const inputPrompt = PromptSync();

export class AuthScreen {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  showLoginForm(): null | userClientType {
    // 입력 받기
    const inputEmail: string = inputPrompt("이메일을 입력해주세요: ");
    const inputPassword: string = inputPrompt("비밀번호를 입력해주세요: ");
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
    const inputEmail: string = inputPrompt("이메일을 입력해주세요: ");
    const inputPassword: string = inputPrompt("비밀번호를 입력해주세요: ");
    const inputName: string = inputPrompt("이름을 알려주세요: ");
    const inputAge: number = Number(inputPrompt("나이를 알려주세요: "));
    const inputIsMarriedStr: string = inputPrompt("결혼 유뮤를 알려주세요(y/n): ");

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
