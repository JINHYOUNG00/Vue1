/**
 * distructure.js
 * 객체 구조분해
 */

let emp = {empName : 'scott', dept:'개발', hireDate: '2019-11-01'}
// console.log(emp.empName);
// let empName = emp.empName;
let { empName, dept } = emp;
console.log(empName, dept);

// 객체 복사
let emp1 = {...emp, dt : '2022'};
emp.empName = 'kim';
console.log('객체복사',emp1, emp);

// 배열 구조분해
let arr = ['a', 'b', 'c'];
let [first, ...args] = arr;
console.log(first, args[1]);
