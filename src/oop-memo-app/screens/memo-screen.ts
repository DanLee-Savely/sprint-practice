import PromptSync from "inputPrompt-sync";
import { MemoService } from "../services/memo-service.js";
import type { createMemoFormType } from "../types.js";

const inputPrompt = PromptSync();

export class MemoScreen {
  private memoService: MemoService;

  constructor(memoService: MemoService) {
    this.memoService = memoService;
  }

  showMyRecentMemo(email: string) {
    const myMemo = this.memoService.loadRecentMemo(email);

    if (myMemo === null) {
      console.log("작성된 메모가 없습니다.");
    } else {
      console.log(`제목: ${myMemo.title}\n내용: ${myMemo.content}`);
    }
  }
  showCreateMemoForm(email: string) {
    // 입력 받기
    const inputTitle: string = inputPrompt("제목을 입력해주세요: ");
    const inputContent: string = inputPrompt("내용을 입력해주세요: ");
    const memoFormData: createMemoFormType = {
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
