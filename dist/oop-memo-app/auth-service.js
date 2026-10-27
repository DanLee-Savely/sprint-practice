import { AuthRepository } from "./auth-repository.js";
import { users } from "./data.js";
export class AuthService {
  authRepository;
  constructor() {
    this.authRepository = new AuthRepository();
  }
  login(loginFormData) {
    const foundUser = this.authRepository.findUserByEmail(loginFormData.email);
    if (foundUser === null) {
      return null;
    }
    if (foundUser.password !== loginFormData.password) {
      return null;
    }
    return foundUser;
  }
  singUp(signUpFormType) {
    const foundUser = this.authRepository.findUserByEmail(signUpFormType.email);
    if (foundUser === null) {
      users.push(signUpFormType);
      return true;
    } else {
      return false;
    }
  }
}
//# sourceMappingURL=auth-service.js.map
