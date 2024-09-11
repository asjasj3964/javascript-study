var numberOne = 20;
function levelOne(){
    console.log(numberOne);
} 
levelOne();
// 함수 실행 시 함수 밖의 변수에 접근할 수 있다. 상위
// 함수 선언 시 상위 변수가 존재하는 scope를 포함할 수 있다.
function levelOne(){
    var numberOne = 40;
    console.log(numberOne);
}
levelOne(); // 가장 가까운 scope의 변수를 가져온다.
// 똑같은 함수 선언 시 최상위 scope 안의 levelOne이라는 함수를 덮어쓰게 된다. 
console.log(numberOne); // 상위 scope의 변수를 덮어쓰진 않는다.
function levelOne(){
    var numberOne = 40;
    function levelTwo(){
        var numberTwo = 99;
        console.log(`levelTwo numberTwo: ${numberTwo}`); // 99 
        console.log(`levelTwo numberOne: ${numberOne}`); // 40
    }
    levelTwo();
    console.log(`levelTwo numberOne: ${numberOne}`); // 40

}
levelOne(); // 모든 선언은 가장 가까운 scope에 있는 선언부터 활용한다. 
console.log(numberOne);
// console.log(numberTwo); // 에러, 하위 scope엔 접근할 수 없다. 
console.log('--------------------');

/** 
 * Lexical Scope (JS)
 * 선언된 위치가 상위 스코프를 정한다. 
 * <->
 * Dynamic Scope
 * 실행한 위치가 상위 스코프를 정한다. 
 */
var numberThree = 3;
function functionOne(){
    var numberThree = 100;
    functionTwo();
}
function functionTwo(){
    console.log(numberThree);
}
functionOne();
var i = 999;
for (var i = 0; i < 10; i++){
    console.log(i);
}
console.log(`i in global scope: ${i}`);
// var 키워드를 썼을 때 scope가 새로 생기는 경우는 함수를 선언했을 때뿐이다. 
// for, if, while -> var 키워드를 썼을 때 새로운 scope를 만들어내지 않는다. 
// var -> function level scope만 만들어낸다. 
i = 999;
for (let i = 0; i < 10; i++){
    console.log(i);
}
console.log(`i in global scope: ${i}`);
// let, const -> function level scope, block level scope(for, if, while)를 만들어낸다.
