import type { loginFormType, signUpFormType, userType } from "./types.js";
export declare class AuthService {
    private authRepository;
    constructor();
    login(loginFormData: loginFormType): null | userType;
    singUp(signUpFormType: signUpFormType): boolean;
}
//# sourceMappingURL=auth-service.d.ts.map