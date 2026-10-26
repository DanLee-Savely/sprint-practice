export class Developer {
  // 데이터
  name;
  age;
  code;
  designer;
  // 행동
  constructor(name, age, deigner) {
    this.name = name;
    this.age = age;
    this.code = "텅 빈 깃허브";
    this.designer = deigner;
  }
  // 코드를 업데이트
  updateCode = () => {
    const currentDesign = this.designer.design;
    this.code = `${currentDesign} 시안대로 작성된 새로운 코드`;
  };
}
//# sourceMappingURL=developer.js.map
