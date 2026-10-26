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
}
