/**
 * 스프레드 연산자 실습
 */

let arr1 = [1,2];
let arr2 = [3,4];
let arr3 = [...arr1, ...arr2];
console.log(arr3[0]);

const chars = ['sum', 'mon', 'thu','fri', 'sat'];
const [a,b,c,...rest] = chars;
console.log(rest[0]);