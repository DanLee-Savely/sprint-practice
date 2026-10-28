import { memos } from "../data.js";
import type { memoDataType } from "../types.js";

export class MemoRepository {
  loadMemosByEmail(email: string): memoDataType[] {
    const myMemos = [];

    for (let i = 0; i < memos.length; i++) {
      if (memos[i]!.email === email) {
        myMemos.push(memos[i]!);
      }
    }

    return myMemos;
  }

  createMemo(memoData: memoDataType) {
    memos.push(memoData);
  }
}
