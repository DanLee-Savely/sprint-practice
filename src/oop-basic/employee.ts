// 클래스: 객체(오브젝트, 인스턴스)를 생성하기 위한 스펙 문서
export class Employee {
  // 인스턴스 속성
  protected name: string;
  protected age: number;
  protected email: string;

  // 생성자
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  // 인스턴스 메소드
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getEmail() {
    return this.email;
  }
  createIntroduce() {
    return `안녕하세요. 새롭게 일하게 된 ${this.name}입니다. ${this.email}로 연락주시면 감사하겠습니다.`;
  }
}
