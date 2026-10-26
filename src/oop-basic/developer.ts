export class Developer {
  // 데이터
  name: string;
  age: number;
  code: string;

  // 행동
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.code = "텅 빈 깃허브";
  }

  // 코드를 업데이트
  updateCode = (newCode: string) => {
    this.code = newCode;
  };
}
