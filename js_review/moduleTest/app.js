// import * as mymodule from './module.js'
// console.log(mymodule.moduleA);

// 모듈 {}로 구조분해해서 필요한것만 이용 가능
import { moduleA as message } from "./module.js";
console.log(message);

import defaultfunction from './module.js'
defaultfunction();