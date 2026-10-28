import { AuthRepository } from "../repositories/auth-repository.js";
import type {
  loginFormType,
  signUpFormType,
  userClientType,
} from "../types.js";
export declare class AuthService {
  private authRepository;
  constructor(authRepository: AuthRepository);
  login(loginFormData: loginFormType): null | userClientType;
  singUp(signUpFormData: signUpFormType): boolean;
}
//# sourceMappingURL=auth-service.d.ts.map
