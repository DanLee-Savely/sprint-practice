import { AuthRepository } from "./auth-repository.js";
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
}
//# sourceMappingURL=auth-service.js.map