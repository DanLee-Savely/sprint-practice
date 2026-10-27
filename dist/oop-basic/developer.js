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
}
//# sourceMappingURL=developer.js.map
