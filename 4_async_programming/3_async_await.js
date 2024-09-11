const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('완료');
        reject('에러');
    }, seconds * 1000)
});

async function runner () {
    try{
        const result1 = await getPromise(1); 
        // await한 함수가 끝날 때까지 다음 코드가 실행되지 않으나 스레드를 막고 있진 않는다. 
        // -> 이 함수 외 다른 함수가 실행될 수 있다. 
        console.log(result1);
        const result2 = await getPromise(2);
        console.log(result2);
        const result3 = await getPromise(1); // await는 프로미스에만 쓸 수 있다. 
        console.log(result3);
    } catch(e){
        console.log('----- catch e -----');
        console.log(e);
    } finally{
        console.log('----- finally -----');
    }
}
runner();
console.log('실행 끝');