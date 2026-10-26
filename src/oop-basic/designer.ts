export class Designer {
  // 데이터
  private name: string;
  private age: number;
  private design: string;

  // 행동
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

  // 디자인 수정 함수 추가
  updateDesign = (newDesign: string) => {
    this.design = newDesign;
  };
}
