import { Employee } from "./employee.js";

// 상속(부모, 자식)
export class Designer extends Employee {
  private design: string;

  constructor(name: string, age: number, email: string) {
    super(name, age, email);
    this.design = "텅 빈 캔버스";
  }

  getDesign() {
    return this.design;
  }
  updateDesign(newDesign: string) {
    this.design = newDesign;
  }
  // 오버라이드: 부모 클래스에서 물려받은 메소드를 새롭게 재정의
  createIntroduce() {
    return `안녕하세요. 새롭게 일하게 된 디자이너 ${this.name}입니다.\n${this.email}로 연락주시면 감사하겠습니다.\n`;
  }
}
