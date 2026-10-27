import { Employee } from "./employee.js";
// 상속(부모, 자식)
export class Designer extends Employee {
  design;
  constructor(name, age, email) {
    super(name, age, email);
    this.design = "텅 빈 캔버스";
  }
  getDesign() {
    return this.design;
  }
  updateDesign(newDesign) {
    this.design = newDesign;
  }
}
//# sourceMappingURL=designer.js.map
