/**
 * Hoisting: 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */
console.log(name); // undefined
var name = '안성진';
console.log(name);
// ==
var name2;
console.log(name2);
name2 = '안성진';
console.log(name);
// var, let, const 다 hoisting이 가능하다. 
console.log(hello);
// let hello = 'hello'; // 초기화할 경우 에러가 발생하지만 초기화하지 않을 경우 undefined가 나온다. 
// 선언 전에 엑세스 하면 hello라는 변수가 undefined라고 정의된다. -> var가 아닌 let을 써야 하는 이유
