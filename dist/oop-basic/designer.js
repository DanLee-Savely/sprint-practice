export class Designer {
  // 데이터
  name;
  age;
  design;
  // 행동
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.design = "텅 빈 캔버스";
  }
  // 디자인 수정 함수 추가
  updateDesign = (newDesign) => {
    this.design = newDesign;
  };
}
//# sourceMappingURL=designer.js.map
