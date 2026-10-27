import type { Designer } from "./designer.js";
import type { Developer } from "./developer.js";

export class DesignerTeam {
  private designerMembers: Designer[];

  constructor() {
    this.designerMembers = [];
  }

  addTeamMember(newDesigner: Designer) {
    this.designerMembers.push(newDesigner);
  }
  study() {
    console.log("=====팀원 자기 소개!=====");
    for (let i = 0; i < this.designerMembers.length; i++) {
      console.log(`팀원: ${this.designerMembers[i]!.getName()}`);
    }
    console.log("스터디를 진행했다!");
    console.log("스터디를 완료했다!");
    console.log();
  }
}

export class DeveloperTeam {
  private developerMembers: Developer[];

  constructor() {
    this.developerMembers = [];
  }

  addTeamMember(newDeveloper: Developer) {
    this.developerMembers.push(newDeveloper);
  }
  study() {
    console.log("=====팀원 자기 소개!=====");
    for (let i = 0; i < this.developerMembers.length; i++) {
      console.log(`팀원: ${this.developerMembers[i]!.getName()}`);
    }
    console.log("스터디를 진행했다!");
    console.log("스터디를 완료했다!");
    console.log();
  }
}
