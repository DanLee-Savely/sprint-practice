// 클래스:
export class Designer {
  // 프로퍼티
  name;
  age;
  design;
  // 생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.design = "텅 빈 캔버스";
  }
  // 메소드
  getName = () => {
    return this.name;
  };
  getDesign = () => {
    return this.design;
  };
  updateDesign = (newDesign) => {
    this.design = newDesign;
  };
}
//# sourceMappingURL=designer.js.map
