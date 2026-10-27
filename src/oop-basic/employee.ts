// 클래스: 객체(오브젝트, 인스턴스)를 생성하기 위한 스펙 문서
export class Employee {
  // 인스턴스 속성
  private name: string;
  private age: number;

  // 생성자
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // 인스턴스 메소드
  getName = () => {
    return this.name;
  };
  getAge = () => {
    return this.age;
  };
}
