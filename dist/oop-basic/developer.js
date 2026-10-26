export class Developer {
  // 데이터
  name;
  age;
  code;
  // 행동
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.code = "텅 빈 깃허브";
  }
  // 코드를 업데이트
  updateCode = (newCode) => {
    this.code = newCode;
  };
}
//# sourceMappingURL=developer.js.map
