import { MemoService } from "../services/memo-service.js";

export class MemoScreen {
  private memoService: MemoService;

  constructor() {
    this.memoService = new MemoService();
  }

  showMyMemoList(email: string) {
    // 이메일로 메모 목록을 찾아서 예쁘게 보여주자.
  }
  showCreateMemoForm(email: string) {
    // 이메일 정보를 활용해서 메모를 작성하고 추가하자.
  }
}
