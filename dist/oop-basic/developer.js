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
    this.designer.design = `${this.name} 개발자가 ${this.designer.name} 디자이너의 시안을 맘대로 바꾼 디자인 시안`;
    this.code = `${this.designer.design} 시안대로 작성된 새로운 코드`;
  };
}
//# sourceMappingURL=developer.js.map
