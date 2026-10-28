import { users } from "./data.js";
import type { userDataType } from "./types.js";

export class AuthRepository {
  findUserByEmail(email: string): userDataType | null {
    for (let i = 0; i < users.length; i++) {
      if (users[i]!.email === email) {
        return users[i]!;
      }
    }

    return null;
  }
}
