import PromptSync from "prompt-sync";
import { AuthScreen } from "./auth-screen.js";
import type { userClientType } from "../types.js";

export class RootScreen {
  private authScreen: AuthScreen;
  private loggedInUser: userClientType | null;

  constructor() {
    this.authScreen = new AuthScreen();
    this.loggedInUser = null;
  }

  run() {
    const prompt = PromptSync();

    while (true) {
      const answer: string = prompt(`메뉴: 로그인, 회원가입, 종료: `);

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

      const answer: string = prompt("메뉴: 메모 읽기, 메모 쓰기, 종료: ");
      if (answer === "메모 읽기") {
        // 메모 스크린에게 메모 화면 보여달라고 부탁한다.
      } else if (answer === "메모 쓰기") {
        // 메모 스크린에게 메모 작성 폼 화면 보여달라고 부탁한다.
      } else if (answer === "종료") {
        break;
      } else {
        console.log("잘못된 입력입니다.");
      }
    }

    console.log("프로그램을 종료합니다");
  }
}
