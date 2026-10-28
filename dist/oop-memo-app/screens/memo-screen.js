import PromptSync from "prompt-sync";
import { MemoService } from "../services/memo-service.js";
const prompt = PromptSync();
export class MemoScreen {
  memoService;
  constructor(memoService) {
    this.memoService = memoService;
  }
  showMyRecentMemo(email) {
    const myMemo = this.memoService.loadRecentMemo(email);
    if (myMemo === null) {
      console.log("작성된 메모가 없습니다.");
    } else {
      console.log(`제목: ${myMemo.title}\n내용: ${myMemo.content}`);
    }
  }
  showCreateMemoForm(email) {
    // 입력 받기
    const inputTitle = prompt("제목을 입력해주세요: ");
    const inputContent = prompt("내용을 입력해주세요: ");
    const memoFormData = {
      title: inputTitle,
      content: inputContent,
    };
    // 메모 생성
    const isCreated = this.memoService.createMemo(email, memoFormData);
    // 결과 안내
    if (isCreated === true) {
      console.log("메모가 생성되었습니다.");
    } else {
      console.log("메모가 생성에 실패했어요.");
    }
  }
}
//# sourceMappingURL=memo-screen.js.map
