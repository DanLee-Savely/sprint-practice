import type { Designer } from "./designer.js";
import { Employee } from "./employee.js";

export class Developer extends Employee {
  private code: string;
  private designer: Designer;

  constructor(name: string, age: number, deigner: Designer) {
    super(name, age);
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
