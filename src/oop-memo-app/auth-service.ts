import { AuthRepository } from "./auth-repository.js";
import type { loginFormType, userType } from "./types.js";

export class AuthService {
  private authRepository: AuthRepository;

  constructor() {
    this.authRepository = new AuthRepository();
  }

  login(loginFormData: loginFormType): null | userType {
    const foundUser = this.authRepository.findUserByEmail(loginFormData.email);
    if (foundUser === null) {
      return null;
    }
    if (foundUser.password !== loginFormData.password) {
      return null;
    }

    return foundUser;
  }
}
