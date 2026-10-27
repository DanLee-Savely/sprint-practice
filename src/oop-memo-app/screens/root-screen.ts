import PromptSync from "prompt-sync";
import { AuthScreen } from "./auth-screen.js";

export class RootScreen {
  // 데이터

  // 생성자

  // 행동
  run() {
    const prompt = PromptSync();

    while (true) {
      const answer: string = prompt(`메뉴: 로그인, 회원가입, 종료: `);

      if (answer === "로그인") {
        // 입력 받기
        const authScren = new AuthScreen();
        authScren.showLoginForm();
      } else if (answer === "회원가입") {
        // 입력 받기
        const inputEmail: string = prompt("이메일을 입력해주세요: ");
        const inputPassword: string = prompt("비밀번호를 입력해주세요: ");
        const inputName: string = prompt("이름을 알려주세요: ");
        const inputAge: number = Number(prompt("나이를 알려주세요: "));
        const inputIsMarriedStr: string = prompt(
          "결혼 유뮤를 알려주세요(y/n): ",
        );
      } else if (answer === "종료") {
        break;
      } else {
        console.log("입력이 잘못되었습니다.");
      }
    }

    console.log("프로그램을 종료합니다");
  }
}
