/**
 * array_sort.js
 */


let fruit = ['banana','오렌지','망고','apple'];
// sort를 이용한 글자수 길이에 대한 정렬
fruit.sort((a,b)=> b.length - a.length )
console.log(fruit);


fruit.sort((a,b)=> {
    if(a > b) return -1;
    else if (a == b) return 0;
    else return 1; 
})

console.log(fruit);

// 객체배열 정렬
let arrEmp = [
    {empName : 'scott', dept:'개발', hireDate: '2019-11-01', score : 90},
    {empName : 'hong', dept:'기획', hireDate: '2018-11-01', score : 80},
    {empName : 'choi', dept:'총무', hireDate: '2017-11-01', score : 100}
];
// 이름 (문자)
arrEmp.sort((a,b) => {
    if(a.empName > b.empName) return 1;
    else if(a.empName == b.empName) return 0;
    else return -1;
})
console.log(arrEmp);

// score (숫자)
arrEmp.sort((a,b) => {
    return b.score - a.score
})
console.log('성적순', arrEmp);

// 필터
let a = arrEmp.filter((val, idx) => {
    return val.dept != '개발';
})
console.log(a);
// find는 최초 맞는 하나만 리턴 filter는 배열을 모두 돌면서 맞는걸 모두 리턴
let a2 = arrEmp.filter((val, idx) => {
    return val.score >= 90;
})
console.log('filter', a2);
let a3 = arrEmp.find((val, idx) => {
    return val.score >= 90;
})
console.log('find',a3);