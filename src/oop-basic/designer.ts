export class Designer {
  // 데이터
  name: string;
  age: number;
  design: string;

  // 행동
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.design = "텅 빈 캔버스";
  }

  // 디자인 수정 함수 추가
  updateDesign = (newDesign: string) => {
    this.design = newDesign;
  };
}
