import { AuthRepository } from "../repositories/auth-repository.js";
import { users } from "../data.js";
export class AuthService {
    authRepository;
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
    login(loginFormData) {
        const foundUser = this.authRepository.findUserByEmail(loginFormData.email);
        if (foundUser === null) {
            return null;
        }
        if (foundUser.password !== loginFormData.password) {
            return null;
        }
        const user = {
            email: foundUser.email,
            name: foundUser.name,
            age: foundUser.age,
            isMarried: foundUser.isMarried,
        };
        return user;
    }
    singUp(signUpFormData) {
        const foundUser = this.authRepository.findUserByEmail(signUpFormData.email);
        if (foundUser === null) {
            users.push(signUpFormData);
            return true;
        }
        else {
            return false;
        }
    }
}
//# sourceMappingURL=auth-service.js.map