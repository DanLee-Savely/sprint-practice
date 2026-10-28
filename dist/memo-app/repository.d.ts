import type { inputMemoType, memoType, userDataType } from "./types.js";
export declare const findUserByEmail: (email: string) => userDataType | null;
export declare const loadMemosByEmail: (email: string) => memoType[];
export declare const createMemo: (email: string, memo: inputMemoType) => void;
//# sourceMappingURL=repository.d.ts.map
