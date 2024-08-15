let result = 1;
let number = 1;
result = number++;
console.log(result, number);
result = --number;
console.log(result, number);
// 숫자가 아닌 타입에 +/- 연산을 사용할 경우
let sample = '99';
console.log(+sample);
console.log(typeof +sample);
console.log(-sample);
console.log(typeof -sample);
console.log(sample);
console.log(typeof sample);
console.log('--------------------');
sample = true;
console.log(+sample);
console.log(typeof +sample);
console.log(-sample);
console.log(typeof -sample);
sample = false;
console.log(+sample);
console.log(typeof +sample);
console.log(-sample);
console.log(typeof -sample);
console.log('--------------------');
sample = '안성진';
console.log(+sample);
console.log(typeof +sample);
console.log('--------------------');
// 비교 연산자: 1. 값의 비교 / 2. 값과 타입의 비교
console.log(5 == 5); // ==: 값의 비교
console.log(5 ==  '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');
console.log(5 === 5); // ===: 값과 타입의 비교
console.log(5 ===  '5');
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');
console.log('--------------------');
console.log(5 != 5); 
console.log(5 !=  '5');
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');
console.log(5 !== 5); 
console.log(5 !==  '5');
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');
console.log('--------------------');
console.log(100 < 1);
console.log(100 > 1);
console.log(100 <= 1);
console.log(100 >= 1);
console.log(10 > 1 ? '10 > 1' : '10 < 1');
/**
 * 단축 평가 (sort circuit evaluation)
 * &&를 사용했을 때 좌측이 true/false면 우측/좌측 값 반환
 * ||를 사용했을 때 좌측이 true/false면 좌측/우측 값 반환
*/
console.log(true || '안성진');
console.log(false || '성진안');
console.log(true && '안성진');
console.log(false && '성진안');
console.log(true && true && '자바');
console.log(true && false && '스크립틀');
console.log('--------------------');
console.log(2**2); // 2^2
// null 연산자
let name;
name = name ?? '인하대'; // => name ??= '인하대' 
console.log(name); // 좌측 값이 null이거나 undefined일 때 우측 값 반환한다.
name = name ?? '아주대';
console.log(name); // 좌측 값이 null이거나 undefined일 때 우측 값 반환한다.
