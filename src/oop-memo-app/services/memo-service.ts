import { MemoRepository } from "../repositories/memo-repository.js";
import type { memoClientType } from "../types.js";

export class MemoService {
  private memoRepository: MemoRepository;

  constructor() {
    this.memoRepository = new MemoRepository();
  }

  loadRecentMemo(email: string): null | memoClientType {
    const memos = this.memoRepository.loadMemosByEmail(email);

    const lastIndex = memos.length - 1;
    if (memos[lastIndex] === undefined) {
      return null;
    } else {
      return {
        title: memos[lastIndex].title,
        content: memos[lastIndex].content,
      };
    }
  }
}
