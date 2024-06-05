export let moduleB;
export const moduleA = 'hello0';
export default function moduleC(){
    console.log('moduleC 호출')
}

// export는 각각해도되고 아래처럼 모아서 해도됨
// export {moduleA,moduleB};