/**
 * Closure
 * : the combination of a function and the lexical 
 *   environment within which that function was declared
 *   어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합
 *   = 상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다.
 */

// function getNumber(){
//     var number = 5;
//     function innerGetNumber(){
//         return number;
//     }
//     return innerGetNumber();
// }
// console.log(getNumber()); // 하위 함수보다 상위 함수가 더 오래 살아있는 경우

function getNumber(){
    var number = 5;
    function innerGetNumber(){
        return number;
    }
    return innerGetNumber;
}
const runner = getNumber(); // 1) 먼저 실행!
console.log(runner); // innerGetNumber를 실행하지 않고 함수 자체를 반환한다. 
console.log(runner()); // 2) 그 다음에 실행! 이미 getNumber()가 실행된 후(execution context가 끝이 난 후) runner()가 실행되었다. 

// closure의 쓰임 - 1) 데이터 캐싱
//
// function cacheFunction(newNumb){
//     // 아래 계산은 매우 오래 걸린다는 가정을 했을 때
//     var number = 10 * 10;
//     return number * newNumb;
// }
// console.log(cacheFunction(10)); // 실행할 때마다 오래 걸리는 계산을 계속 해주어야 한다. -> 리소스 사용 多

function cacheFunction(){
    // 아래 계산은 매우 오래 걸린다는 가정을 했을 때
    var number = 10 * 10;
    // 함수 안에 closure를 만든다. 
    function innerCacheFunction(newNumb){ // 새로운 숫자를 여기서 받는다. 
        return number * newNumb;
    }
    return innerCacheFunction;
}
const runner2 = cacheFunction(); // 오래 걸리는 계산을 여기서 한번만 해줄 수 있다. 
console.log(runner2(10)); // 오래 걸리는 계산을 closure에서 기억을 하고 innerCacheFunction 안에서 계산을 한다. -> 효율적
console.log(runner2(20)); 

// closure의 쓰임 - 2) 반복적으로 특정 값을 변환해야 될 때
function cacheFunction2(){
    var number = 99;
    function increment(){ // number 값을 기억하고 있다.
        number ++;
        return number;
    }
    return increment;
}
const runner3 = cacheFunction2();
console.log(runner3());
console.log(runner3());
console.log(runner3());

// closure의 쓰임 - 3) 정보 은닉
function Person(name, year){
    this.name = name;
    var _year = year;
    this.sayNameAndYear = function(){
        return `안녕하세요, 저는 ${this.name}입니다. ${_year}에 태어났습니다. `;
    }
}
const seongjin = new Person('안성진', 2000);
console.log(seongjin.sayNameAndYear());
console.log(seongjin.name);
console.log(seongjin._year); // this 키워드로 저장하지 않아 객체의 프로퍼티로 엑세스 할 순 없으나 생성된 후 함수의 메소드 안에서 나중에 엑세스 할 수 있다. 
