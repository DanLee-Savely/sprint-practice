import { memos } from "../data.js";
export class MemoRepository {
    loadMemosByEmail(email) {
        const myMemos = [];
        for (let i = 0; i < memos.length; i++) {
            if (memos[i].email === email) {
                myMemos.push(memos[i]);
            }
        }
        return myMemos;
    }
    createMemo(memoData) {
        memos.push(memoData);
    }
}
//# sourceMappingURL=memo-repository.js.map