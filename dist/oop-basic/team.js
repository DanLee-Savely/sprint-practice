export class DeveloperTeam {
  // 인스턴스 속성
  developerMembers;
  // 생성자
  constructor() {
    this.developerMembers = [];
  }
  // 인스턴스 메소드
  // 팀원 추가
  addTeamMember(newDeveloper) {
    this.developerMembers.push(newDeveloper);
  }
  study() {
    console.log("=====팀원 자기 소개!=====");
    for (let i = 0; i < this.developerMembers.length; i++) {
      console.log(`팀원: ${this.developerMembers[i].getName()}`);
    }
    console.log("스터디를 진행했다!");
    console.log("스터디를 완료했다!");
    console.log();
  }
}
//# sourceMappingURL=team.js.map
