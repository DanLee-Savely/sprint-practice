import PromptSync from "prompt-sync";
import { AuthScreen } from "./auth-screen.js";
import { MemoScreen } from "./memo-screen.js";
export class RootScreen {
  authScreen;
  memoScreen;
  loggedInUser;
  constructor(authScreen, memoScreen) {
    this.authScreen = authScreen;
    this.memoScreen = memoScreen;
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
    console.log();
    while (this.loggedInUser !== null) {
      console.log(`${this.loggedInUser.name}님의 메모장입니다.`);
      const answer = prompt("메뉴: 메모 읽기, 메모 쓰기, 종료: ");
      if (answer === "메모 읽기") {
        this.memoScreen.showMyRecentMemo(this.loggedInUser.email);
      } else if (answer === "메모 쓰기") {
        this.memoScreen.showCreateMemoForm(this.loggedInUser.email);
      } else if (answer === "종료") {
        break;
      } else {
        console.log("잘못된 입력입니다.");
      }
    }
    console.log("프로그램을 종료합니다");
  }
}
//# sourceMappingURL=root-screen.js.map
