import type { Designer } from "./designer.js";

export class Developer {
  // 프로퍼티
  private name: string;
  private age: number;
  private code: string;
  private designer: Designer;

  // 생성자
  constructor(name: string, age: number, deigner: Designer) {
    this.name = name;
    this.age = age;
    this.code = "텅 빈 깃허브";
    this.designer = deigner;
  }

  // 메소드
  getName = () => {
    return this.name;
  };

  getCode = () => {
    return this.code;
  };

  updateCode = () => {
    this.code = `${this.designer.getDesign()} 시안대로 작성된 새로운 코드`;
  };
}
