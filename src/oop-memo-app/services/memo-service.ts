import { AuthRepository } from "../repositories/auth-repository.js";
import { MemoRepository } from "../repositories/memo-repository.js";
import type {
  createMemoFormType,
  memoClientType,
  memoDataType,
} from "../types.js";

export class MemoService {
  private authRepository: AuthRepository;
  private memoRepository: MemoRepository;

  constructor() {
    this.authRepository = new AuthRepository();
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

  createMemo(email: string, memoFormData: createMemoFormType): boolean {
    const foundUser = this.authRepository.findUserByEmail(email);
    if (foundUser === null) {
      return false;
    }

    const newMemo: memoDataType = {
      ...memoFormData,
      email: email,
    };
    this.memoRepository.createMemo(newMemo);

    return true;
  }
}
