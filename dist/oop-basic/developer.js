export class Developer {
  // 프로퍼티
  name;
  age;
  code;
  designer;
  // 생성자
  constructor(name, age, deigner) {
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
//# sourceMappingURL=developer.js.map
