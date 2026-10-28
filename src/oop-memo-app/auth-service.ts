import { AuthRepository } from "./auth-repository.js";
import { users } from "./data.js";
import type { loginFormType, signUpFormType, userTypeClient } from "./types.js";

export class AuthService {
  private authRepository: AuthRepository;

  constructor() {
    this.authRepository = new AuthRepository();
  }

  login(loginFormData: loginFormType): null | userTypeClient {
    const foundUser = this.authRepository.findUserByEmail(loginFormData.email);
    if (foundUser === null) {
      return null;
    }
    if (foundUser.password !== loginFormData.password) {
      return null;
    }

    const user: userTypeClient = {
      email: foundUser.email,
      name: foundUser.name,
      age: foundUser.age,
      isMarried: foundUser.isMarried,
    };

    return user;
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
