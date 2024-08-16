// 명시적 형변환
let age = 25;
let stringAge = age.toString(); 
console.log(typeof stringAge, stringAge);
// 암묵적 형변환
let test = age + ''; // string으로 형변환
console.log(typeof test, test);
console.log('98' + 2); // 어느 한 쪽이 형변환 되어야 한다. -> 2가 string으로 형변환됨
console.log('98' - 2); // string엔 뺀다는 개념이 없어 '98'이 숫자로 형변환된다. 
console.log('98' * 2); // string엔 곱한다는 개념이 없어 '98'이 숫자로 형변환된다. 
// 명시적 형변환
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('3.14123'), parseFloat('3.14123'));
console.log(typeof +'1', +'1');
console.log(!'x'); // string 값 안에 값이 들어 있으면 boolean 기준으로 true로 본다. 
console.log(!!'x');
console.log(!''); // '' -> false
console.log(!!'');
console.log(!0);
console.log(!!0);
console.log(!'0');
console.log(!!'0');
console.log(!'false');
console.log(!!'false');
console.log(!false);
console.log(!!false);
console.log(!undefined);
console.log(!null);
console.log(!{}); // Object, Array는 값이 안 들어있어도 무조건 true로 본다.
console.log(![]); 
/**
 * 아무 글자도 없는 String
 * 값이 없는 경우
 * 0
 * -> 모두 false를 반환한다. 
 */