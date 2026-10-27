import type { Designer } from "./designer.js";
import { Employee } from "./employee.js";
export declare class Developer extends Employee {
    private code;
    private designer;
    constructor(name: string, age: number, email: string, deigner: Designer);
    getCode(): string;
    updateCode(): void;
    createIntroduce(): string;
}
//# sourceMappingURL=developer.d.ts.map