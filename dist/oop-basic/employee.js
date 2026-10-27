// 클래스: 객체(오브젝트, 인스턴스)를 생성하기 위한 스펙 문서
export class Employee {
    // 인스턴스 속성
    name;
    age;
    email;
    // 생성자
    constructor(name, age, email) {
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
//# sourceMappingURL=employee.js.map