import { Designer } from "./designer.js";
import { Developer } from "./developer.js";

// 객체(인스턴스) 생성
const designer1 = new Designer("박민수", 29);
console.log(`${designer1.getName()} 디자이너님을 채용했습니다`);

const deveoper1 = new Developer("김민지", 25, designer1);
console.log(`${deveoper1.getName()} 개발자님을 채용했습니다`);

designer1.updateDesign("새로운 디자인 시안1");
console.log(`디자인 업데이트 후 디자인 상태: ${designer1.getDesign()}`);

deveoper1.updateCode();
console.log(`코드 업데이트 후 코드 상태: ${deveoper1.getCode()}`);
