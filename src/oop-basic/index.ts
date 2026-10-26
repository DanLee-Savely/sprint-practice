import { Designer } from "./designer.js";
import { Developer } from "./developer.js";

const dev1 = new Developer("김민지", 25);
console.log(dev1);
const designer1 = new Designer("박민수", 29);
console.log(designer1);

dev1.updateCode("새로운 코드");
console.log(dev1);
