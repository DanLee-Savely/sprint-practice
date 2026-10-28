import PromptSync from "prompt-sync";
import { AuthScreen } from "./auth-screen.js";
export class RootScreen {
  authScreen;
  loggedInUser;
  constructor() {
    this.authScreen = new AuthScreen();
    this.loggedInUser = null;
  }
  run() {
    const prompt = PromptSync();
    while (true) {
      const answer = prompt(`메뉴: 로그인, 회원가입, 종료: `);
      if (answer === "로그인") {
        this.loggedInUser = this.authScreen.showLoginForm();
        if (this.loggedInUser !== null) {
          break;
        }
      } else if (answer === "회원가입") {
        this.authScreen.showSignUpForm();
      } else if (answer === "종료") {
        break;
      } else {
        console.log("입력이 잘못되었습니다.");
      }
    }
    if (this.loggedInUser !== null) {
      console.log(this.loggedInUser);
    } else {
      console.log("프로그램을 종료합니다");
    }
  }
}
//# sourceMappingURL=root-screen.js.map
