function calculate(x){
    let result = x * 10 / 2 % 3;
    return result;
}
console.log(calculate(2).toString());
/**
 * parameter: 함수에서 입력받는 값에 대한 정의
 * argument: 실제 입력하는 값
 */
function multiply(x, y = 10){
    console.log(x * y);
}
multiply(2, 4);
multiply(2);
// Arrow 함수
const multiply2 = (x, y) => {
    return x * y;
}
const multiply3 = (x, y) => x * y;
console.log(multiply2(3, 4));
console.log(multiply3(3, 4));
const multiply4 = x => x * 7;
console.log(multiply4(2));
const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
function multiply6(x){
    return function(y){
        return function(z){
            return `x: ${x} y: ${y} z: ${z}`;
        }
    }
}
console.log(multiply5(2)(5)(7));
console.log(multiply6(2)(5)(7));
const multiply7 = function(x, y){
    return x * y;
}
console.log(multiply7(5, 6));
const multiply8 = function(x, y, z){
    console.log(arguments);
    return x * y * z;
}
console.log(multiply8(4, 5, 6));
// 외부에서 원하는 만큼 parameter를 넣어줄 수 있다. 
const multiply9 = function(...arguments){ // 무한하게 parameter를 받을 수 있다. 
    return Object.values(arguments).reduce((a, b) => a * b, 1);
    // arguments에 있는 value 값들을 전부 하나씩 곱해 반환한다. 
}
console.log(multiply9(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// 즉시 실행 함수(immediately invoked function): 정의하자마자 바로 실행된다.)
(function(x, y){
    console.log(x * y);
})(4, 5) // 괄호 안에 들어있는 함수를 실행한다. 
console.log(typeof multiply);
console.log(multiply instanceof Object); // 좌측의 값이 우측의 값과 비슷한 타입인가 -> multiply 함수가 Object인가? 
