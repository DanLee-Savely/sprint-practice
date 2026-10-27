import type { Employee } from "./employee.js";

// 제네릭: 타입을 변수화
export class Team<T extends Employee> {
  private members: T[];

  constructor() {
    this.members = [];
  }

  addTeamMember(newMember: T) {
    this.members.push(newMember);
  }
  study() {
    console.log("=====팀원 자기 소개!=====");
    for (let i = 0; i < this.members.length; i++) {
      console.log(`팀원: ${this.members[i]!.getName()}`);
    }
    console.log("스터디를 진행했다!");
    console.log("스터디를 완료했다!");
    console.log();
  }
}
