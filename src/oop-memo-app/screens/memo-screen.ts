import { MemoService } from "../services/memo-service.js";

export class MemoScreen {
  private memoService: MemoService;

  constructor() {
    this.memoService = new MemoService();
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
    // 이메일 정보를 활용해서 메모를 작성하고 추가하자.
  }
}
