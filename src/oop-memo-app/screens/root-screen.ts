import PromptSync from "prompt-sync";
import { AuthScreen } from "./auth-screen.js";

export class RootScreen {
  private authScreen: AuthScreen;

  constructor() {
    this.authScreen = new AuthScreen();
  }

  run() {
    const prompt = PromptSync();

    while (true) {
      const answer: string = prompt(`메뉴: 로그인, 회원가입, 종료: `);

      if (answer === "로그인") {
        const loggedInUser = this.authScreen.showLoginForm();
        if (loggedInUser !== null) {
          break;
        }
      } else if (answer === "회원가입") {
        // 과제!
      } else if (answer === "종료") {
        break;
      } else {
        console.log("입력이 잘못되었습니다.");
      }
    }

    console.log("프로그램을 종료합니다");
  }
}
