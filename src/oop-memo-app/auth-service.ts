import { AuthRepository } from "./auth-repository.js";
import { users } from "./data.js";
import type { loginFormType, signUpFormType, userType } from "./types.js";

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

  singUp(signUpFormData: signUpFormType): boolean {
    const foundUser = this.authRepository.findUserByEmail(signUpFormData.email);

    if (foundUser === null) {
      users.push(signUpFormData);
      return true;
    } else {
      return false;
    }
  }
}
