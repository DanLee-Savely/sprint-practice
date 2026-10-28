import type { loginFormType, signUpFormType, userClientType } from "./types.js";
export declare class AuthService {
  private authRepository;
  constructor();
  login(loginFormData: loginFormType): null | userClientType;
  singUp(signUpFormData: signUpFormType): boolean;
}
//# sourceMappingURL=auth-service.d.ts.map
