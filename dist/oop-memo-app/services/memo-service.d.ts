import { AuthRepository } from "../repositories/auth-repository.js";
import { MemoRepository } from "../repositories/memo-repository.js";
import type { createMemoFormType, memoClientType } from "../types.js";
export declare class MemoService {
  private authRepository;
  private memoRepository;
  constructor(authRepository: AuthRepository, memoRepository: MemoRepository);
  loadRecentMemo(email: string): null | memoClientType;
  createMemo(email: string, memoFormData: createMemoFormType): boolean;
}
//# sourceMappingURL=memo-service.d.ts.map
