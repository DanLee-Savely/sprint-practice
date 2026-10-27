export class Designer {
  // 프로퍼티
  private name: string;
  private age: number;
  private design: string;

  // 생성자
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.design = "텅 빈 캔버스";
  }

  getName = () => {
    return this.name;
  };

  getDesign = () => {
    return this.design;
  };

  updateDesign = (newDesign: string) => {
    this.design = newDesign;
  };
}
