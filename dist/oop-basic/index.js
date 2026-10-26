import { Designer } from "./designer.js";
import { Developer } from "./developer.js";
const deveoper1 = new Developer("김민지", 25);
console.log(deveoper1);
const designer1 = new Designer("박민수", 29);
console.log(designer1);
deveoper1.updateCode("새로운 코드");
console.log(deveoper1.code);
designer1.updateDesign("새로운 디자인");
console.log(designer1.design);
//# sourceMappingURL=index.js.map
