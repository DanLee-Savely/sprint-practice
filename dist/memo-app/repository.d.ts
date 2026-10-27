import type { inputMemoType, memoType, userType } from "./types.js";
export declare const findUserByEmail: (email: string) => userType | null;
export declare const loadMemosByEmail: (email: string) => memoType[];
export declare const createMemo: (email: string, memo: inputMemoType) => void;
//# sourceMappingURL=repository.d.ts.map