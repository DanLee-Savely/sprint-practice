import { AuthRepository } from "./repositories/auth-repository.js";
import { MemoRepository } from "./repositories/memo-repository.js";
import { AuthScreen } from "./screens/auth-screen.js";
import { MemoScreen } from "./screens/memo-screen.js";
import { RootScreen } from "./screens/root-screen.js";
import { AuthService } from "./services/auth-service.js";
import { MemoService } from "./services/memo-service.js";
export class Injector {
    inject() {
        const authRepository = new AuthRepository();
        const memoRepository = new MemoRepository();
        const authService = new AuthService(authRepository);
        const memoService = new MemoService(authRepository, memoRepository);
        const authScreen = new AuthScreen(authService);
        const memoScreen = new MemoScreen(memoService);
        const rootScreen = new RootScreen(authScreen, memoScreen);
        return rootScreen;
    }
}
//# sourceMappingURL=injector.js.map