import { Employee } from "./employee.js";

// 클래스: 객체(오브젝트, 인스턴스)를 생성하기 위한 스펙 문서
export class Designer extends Employee {
  // 인스턴스 속성
  private design: string;

  // 생성자
  constructor(name: string, age: number) {
    super(name, age);
    this.design = "텅 빈 캔버스";
  }

  // 인스턴스 메소드
  getDesign = () => {
    return this.design;
  };
  updateDesign = (newDesign: string) => {
    this.design = newDesign;
  };
}
