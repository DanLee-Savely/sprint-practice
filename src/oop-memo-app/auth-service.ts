import type { userType } from "./types.js";

export class AuthService {
  login(loginFormData: { email: string; password: string }): null | userType {
    const foundUser = findUserByEmail(loginFormData.email);
    if (foundUser === null) {
      return null;
    }
    if (foundUser.password !== loginFormData.password) {
      return null;
    }

    return foundUser;
  }
}
