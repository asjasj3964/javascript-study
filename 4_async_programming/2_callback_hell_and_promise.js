// callback
function waitAndRun(){
    setTimeout(() => { // 특정 시간(timeout)이 지나고 다시 불리는 함수
        console.log('끝');
    }, 2000);  
}
// waitAndRun();
function waitAndRun2(){
    setTimeout(
        () => {
            console.log('1번 콜백 끝');
            setTimeout(() =>{
                console.log('2번 콜백 끝');
                setTimeout(() => {
                    console.log('3번 콜백 끝');
                }, 2000);
            }, 2000);
        }, 2000);
} 
// waitAndRun2();
// promise
const timeoutPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('완료');        
    }, 2000);
});
// timeoutPromise.then((res) => { // res -> resolve 함수에 넣어준 값 
//     console.log('----- then -----')
//     console.log(res);
// }); // then - 그러고 난 다음에
// 프로미스를 반환하는 함수
const getPromise = (seconds) => new Promise((resolve, reject) => { // reject - 에러가 났을 때
    setTimeout(() => {
        resolve('완료');
    }, seconds * 1000);
});
/* getPromise(1)
    .then((res) => {
        console.log('----- first then -----')
        console.log(res);
        return getPromise(2);
    }).then((res) => {
        console.log('----- second then -----');
        console.log(res);
        return getPromise(1);
    }).then((res) => {
        console.log('----- third then -----');
        console.log(res);
    }) */

const getPromise2 = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // if (..) { resolve('성공'); }
        // else { reject('에러'); }
        reject('에러');
    }, seconds)
});
/* getPromise2(1)
    .then((res) => {
        console.log('----- fisrt then -----');
        console.log(res);
    })
    .catch((res) => {
        console.log('----- fisrt catch -----');
        console.log(res);
    })
    .finally(() => { // reject, resolve 모두 실행되는 부분
        console.log('----- finally -----')
    }); */
Promise.all([ // all - static 메서드
    getPromise(1),
    getPromise(4), // 이 경우엔 4초 뒤에 3개의 프로미스가 입력된다. 
    getPromise(1),
]).then((res) => { // 한번에 then으로 묶는다. 3개의 프로미스들을 동시에 실행한다.
    console.log(res);
})