import { AuthRepository } from "../repositories/auth-repository.js";
import { MemoRepository } from "../repositories/memo-repository.js";
export class MemoService {
  authRepository;
  memoRepository;
  constructor(authRepository, memoRepository) {
    this.authRepository = authRepository;
    this.memoRepository = memoRepository;
  }
  loadRecentMemo(email) {
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
  createMemo(email, memoFormData) {
    const foundUser = this.authRepository.findUserByEmail(email);
    if (foundUser === null) {
      return false;
    }
    const newMemo = {
      ...memoFormData,
      email: email,
    };
    this.memoRepository.createMemo(newMemo);
    return true;
  }
}
//# sourceMappingURL=memo-service.js.map
