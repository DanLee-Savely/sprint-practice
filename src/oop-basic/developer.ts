import type { Designer } from "./designer.js";
import { Employee } from "./employee.js";

export class Developer extends Employee {
  private code: string;
  private designer: Designer;

  constructor(name: string, age: number, email: string, deigner: Designer) {
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
