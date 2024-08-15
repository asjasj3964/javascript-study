/**
 * Primitive Type / Object Type
 * 
 * <Primitive Type>
 * 1. Number 
 * 2. String 
 * 3. Boolean 
 * 4. undefined
 * 5. null
 * 6. Symbol
 * 
 * <Object type>
 * 1. Object
 *  - Function, Array, Object, ...
 */

const age = 25;
const temperature = -15;
const pi = 3.14;
 console.log(typeof age);
 console.log(typeof temperature);
 console.log(typeof pi);
 console.log('--------------------');
 const infinity = Infinity; // 무한대 값
 const nInfinity = -Infinity;
 console.log(typeof infinity);
 console.log(typeof nInfinity);
 console.log('--------------------');
const programming = "'java'script"; // 작은 따옴표(')를 출력하려면 " .. " 안에 작성한다.
console.log(programming);
const language = '"java"script'; // 큰 따옴표(")를 출력하려면 ' .. ' 안에 작성한다. 
console.log(language);
console.log("컴퓨터공학과\n4학년\t21학번\\성진\'s '나이'는 25살");
const javascript = `자바'"///
스크립트`;
console.log(javascript);
console.log(typeof javascript);
console.log(javascript + ' & 파이썬');
console.log(`${javascript} 파이썬`);
console.log('--------------------');
let noInit = undefined; // 직접 undefined로 초기화하는 건 지양한다. 
console.log(noInit);
console.log(typeof noInit);
let init = null; // 직접 명시적으로 없는 값으로 초기화할 때 사용한다. 
console.log(init);
console.log(typeof init); // null - Object Type이라고 정해졌다. (일종의 버그)
console.log('--------------------');
const test1 = '1';
const test2 = '2';
const test3 = '1';
console.log(test1 === test3);
console.log(test2 === test3);
const symbol1 = Symbol('1'); // 유일무이한 값으로 인식되어 저장된다. 
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);
console.log('--------------------');
/** 
 * Object Type
 * Map과 비슷하다. 
 *  - key:value의 쌍으로 이루어져 있다. 
*/
const dictionary = {
    red:'빨간색',
    orange:'주황색',
    yellow:'노란색',
};
console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);
console.log(typeof dictionary);
console.log('--------------------');
/**
 * Array Type
 * 값을 리스트로 나열할 수 있다. 
 */
const inhaStudentsArray = [
    '안성진',
    '구범근',
    '임가희',
    '유승환',
    '류남경',
    '전규민'
];
console.log(inhaStudentsArray);
console.log(inhaStudentsArray[1]);
inhaStudentsArray[3] = '유환승';
console.log(inhaStudentsArray);
console.log(typeof inhaStudentsArray);
/**
 * Static Typing: 변수 선언 시 어떤 타입의 변수를 선언할 지 명시한다. 
 * Dynamic Typing: 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론"한다.
 * 즉, JS는 Dynamic Typing 
 */