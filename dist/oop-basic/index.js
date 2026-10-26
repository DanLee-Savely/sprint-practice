import { Designer } from "./designer.js";
import { Developer } from "./developer.js";
const designer1 = new Designer("박민수", 29);
const deveoper1 = new Developer("김민지", 25, designer1);
designer1.updateDesign("새로운 디자인");
console.log(designer1.design);
deveoper1.updateCode();
console.log(deveoper1.code);
//# sourceMappingURL=index.js.map
