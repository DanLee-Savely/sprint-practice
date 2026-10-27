import { Employee } from "./employee.js";

// 상속(부모, 자식)
export class Designer extends Employee {
  private design: string;

  constructor(name: string, age: number) {
    super(name, age);
    this.design = "텅 빈 캔버스";
  }

  getDesign() {
    return this.design;
  }
  updateDesign(newDesign: string) {
    this.design = newDesign;
  }
}
