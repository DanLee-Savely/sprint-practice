import { Designer } from "./designer.js";
import { Developer } from "./developer.js";
// 객체(인스턴스) 생성
const designer1 = new Designer("박민수", 29, "minsu@sprint.com");
console.log(designer1.createIntroduce());
const deveoper1 = new Developer("김민지", 25, "minji@sprint.com", designer1);
console.log(deveoper1.createIntroduce());
designer1.updateDesign("새로운 디자인 시안1");
console.log(`디자인 업데이트 후 디자인 상태: ${designer1.getDesign()}`);
deveoper1.updateCode();
console.log(`코드 업데이트 후 코드 상태: ${deveoper1.getCode()}`);
//# sourceMappingURL=index.js.map
