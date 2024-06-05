/**
 * array_map.js
 * map 함수
 */

let arr = [1,2,3];
let result = arr.map((val, idx) => {
    return val * val
});
console.log(result);

let userArr = [
    {userid:1, score:60},
    {userid:2, score:50},
    {userid:3, score:70},
    {userid:4, score:40}
];

let result2 = userArr.map((val,idx) => {
    if(val.score >= 60) return {...val, grade :  true}; 
    else return {...val, grade : false};
})
console.log(userArr);
console.log(result2);