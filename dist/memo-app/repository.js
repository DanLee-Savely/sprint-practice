import { memos, users } from "./data.js";
export const findUserByEmail = (email) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            return users[i];
        }
    }
    return null;
};
export const loadMemosByEmail = (email) => {
    const myMemos = [];
    for (let i = 0; i < memos.length; i++) {
        if (memos[i].email === email) {
            myMemos.push(memos[i]);
        }
    }
    return myMemos;
};
export const createMemo = (email, memo) => {
    // 1. 새로운 객체를 중괄호를 열어서 만든다
    // 2. 메모 내부의 데이터를 복사해서 새롭게 만든 객체의 내부에 붙여넣는다.
    // 3. 이메일은 별도로 추가해준다.
    memos.push({ ...memo, email: email });
};
//# sourceMappingURL=repository.js.map