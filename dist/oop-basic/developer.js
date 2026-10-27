import { Employee } from "./employee.js";
export class Developer extends Employee {
    code;
    designer;
    constructor(name, age, email, deigner) {
        super(name, age, email);
        this.code = "텅 빈 깃허브";
        this.designer = deigner;
    }
    getCode() {
        return this.code;
    }
    updateCode() {
        this.code = `${this.designer.getDesign()} 시안대로 작성된 새로운 코드`;
    }
    createIntroduce() {
        return `안녕하세요. 새롭게 일하게 된 개발자 ${this.name}입니다.\n${this.email}로 연락주시면 감사하겠습니다.\n`;
    }
}
//# sourceMappingURL=developer.js.map