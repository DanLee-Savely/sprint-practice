import { Designer } from "./designer.js";
import { Developer } from "./developer.js";
import { Team } from "./team.js";
// 객체(인스턴스) 생성
const designer1 = new Designer("김민지", 25, "minji@sprint.com");
const designer2 = new Designer("이민정", 27, "minjung@sprint.com");
const designer3 = new Designer("박민주", 29, "minju@sprint.com");
console.log(designer1.createIntroduce());
console.log(designer2.createIntroduce());
console.log(designer3.createIntroduce());
const deveoper1 = new Developer("김바람", 25, "baram@sprint.com", designer1);
const deveoper2 = new Developer("이지우", 25, "jiwoo@sprint.com", designer2);
const deveoper3 = new Developer("금태양", 27, "taeyang@sprint.com", designer3);
console.log(deveoper1.createIntroduce());
console.log(deveoper2.createIntroduce());
console.log(deveoper3.createIntroduce());
// 업무 시작
designer1.updateDesign("새로운 디자인 시안1");
designer2.updateDesign("새로운 디자인 시안1");
designer3.updateDesign("새로운 디자인 시안1");
console.log(`디자인 업데이트 후 디자인 상태: ${designer1.getDesign()}`);
console.log(`디자인 업데이트 후 디자인 상태: ${designer2.getDesign()}`);
console.log(`디자인 업데이트 후 디자인 상태: ${designer3.getDesign()}`);
deveoper1.updateCode();
deveoper2.updateCode();
deveoper3.updateCode();
console.log(`코드 업데이트 후 코드 상태: ${deveoper1.getCode()}`);
console.log(`코드 업데이트 후 코드 상태: ${deveoper2.getCode()}`);
console.log(`코드 업데이트 후 코드 상태: ${deveoper3.getCode()}`);
console.log("업무 종료\n");
// 업무 종료 후 직군별로 스터디 시작
console.log("디자이너 팀 스터디 시작");
const designerTeam = new Team();
designerTeam.addTeamMember(designer1);
designerTeam.addTeamMember(designer2);
designerTeam.addTeamMember(designer3);
designerTeam.study();
console.log("개발자 팀 스터디 시작");
const developerTeam = new Team();
developerTeam.addTeamMember(deveoper1);
developerTeam.addTeamMember(deveoper2);
developerTeam.addTeamMember(deveoper3);
developerTeam.study();
//# sourceMappingURL=index.js.map