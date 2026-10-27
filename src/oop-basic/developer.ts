import type { Designer } from "./designer.js";

export class Developer {
  private name: string;
  private age: number;
  private code: string;
  private designer: Designer;

  constructor(name: string, age: number, deigner: Designer) {
    this.name = name;
    this.age = age;
    this.code = "텅 빈 깃허브";
    this.designer = deigner;
  }

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
