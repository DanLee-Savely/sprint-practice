import { users } from "./data.js";
export class AuthRepository {
    findUserByEmail(email) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                return users[i];
            }
        }
        return null;
    }
}
//# sourceMappingURL=auth-repository.js.map