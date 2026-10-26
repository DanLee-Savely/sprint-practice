import type { Designer } from "./designer.js";

export class Developer {
  // 데이터
  name: string;
  age: number;
  code: string;
  designer: Designer;

  // 행동
  constructor(name: string, age: number, deigner: Designer) {
    this.name = name;
    this.age = age;
    this.code = "텅 빈 깃허브";
    this.designer = deigner;
  }

  // 코드를 업데이트
  updateCode = () => {
    this.code = `${this.designer.getDesign()} 시안대로 작성된 새로운 코드`;
  };
}
