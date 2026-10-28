import { AuthService } from "../services/auth-service.js";
import type { userClientType } from "../types.js";
export declare class AuthScreen {
    private authService;
    constructor(authService: AuthService);
    showLoginForm(): null | userClientType;
    showSignUpForm(): void;
}
//# sourceMappingURL=auth-screen.d.ts.map