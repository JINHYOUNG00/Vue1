/**
 * 함수 매개변수에 rest 연산자
 */

function total(num,...arr){
    let result = num;
    // 합계계산
    // for(let a of arr) {
    //     result += a
    // }

    result = arr.reduce((acc, ele) => {
        return acc + ele
    }, num)
    // console.log(num, arr);
    console.log('합계=', result);
}




total(10);
total(10, 20);
total(10, 20, 30);