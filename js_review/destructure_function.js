/**
 * 
 */

function total(num, ...arr) {
    let sum  = num;
    let avg = 0;
    sum = arr.reduce((acc, val)=> {
        return acc + val;
    }, num);
    avg = sum / (arr.length +1);
    return {sum, avg};
}

let result = total(1,2,3,4,5);
console.log('sum=',result.sum,'avg=', result.avg);
let {sum, avg} = total(10,20,30,40,50);
console.log('sum=',sum,'avg=', avg)