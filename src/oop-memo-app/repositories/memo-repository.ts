import { memos } from "../data.js";
import type { createMemoFormType, memoDataType } from "../types.js";

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

  createMemo(email: string, memoFormData: createMemoFormType) {
    const newMemo: memoDataType = {
      ...memoFormData,
      email: email,
    };
    memos.push(newMemo);
  }
}
