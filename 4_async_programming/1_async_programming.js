// Async theory
function longWork1(){
    const now = new Date(); // 코드가 실행되는 시점의 날짜와 시간
    /**
     * milliseconds since epoch
     * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을 밀리초로 반환한다. 
     */
    const milliseconds = now.getTime();
    const afterTwoSeconds = milliseconds + 2 * 1000; // 1초 = 1000밀리초
    while(new Date().getTime() < afterTwoSeconds){ // false -> 이 코드가 실행된 지 2초 뒤
        // 어떤 코드를 작성하든 longWork는 while loop은 2초동안 계속 실행된다. 

    }
    console.log('완료');
}   
console.log('Hello');
longWork1(); // 아무것도 하지 않는 구간동안 기다리기만 한다면 리소스가 낭비된다. -> 비동기 프로그래밍!
console.log('World');

function longWork2(){
    setTimeout(() => { // 비동기로 실행하는 함수
        console.log('완료');
    }, 2000); // JS에서 기본적으로 제공해주는 함수, 2초동안 기다렸다가 왼쪽의 함수를 실행시킨다. 
}
console.log('Hello');
longWork2();
console.log('World');