/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 1) 기본적으로 모든 primitive 값은 copy by value이다. 
 * 2) 객체는 copy by reference이다. 
*/
let original = '안녕하세요. ';
let clone = original;
clone += '안성진입니다. '
console.log(original);
console.log(clone);
let originalObj = {
    name:'안성진',
    age:25,
}
let cloneObj = originalObj;
console.log(cloneObj);
originalObj['age'] = 15;
console.log(originalObj);
console.log(cloneObj);
console.log(originalObj === cloneObj);
console.log(original === clone);
originalObj = {
    name:'안성진',
    age:25,
};
cloneObj = {
    name:'안성진',
    age:25,
};
console.log(original === clone);
const seongjin1 = {
    ...originalObj, // 값에 의한 복사
};
console.log(seongjin1);
console.log(seongjin1 === originalObj);
const seongjin2 = {
    year:2000,
    ...originalObj,
};
console.log(seongjin2);
let seongjin3 = {
    name:'성진이',
    ...originalObj, // originalObj의 key 값이 덮어쓴다. 
};
console.log(seongjin3);
seongjin3 = {
    ...originalObj, // originalObj의 key 값이 덮어쓴다. 
    name:'성진이',
};
console.log(seongjin3);
const numbers = [ 1, 3, 5, 7];
let numbers2 = [
    ...numbers,
    9,
]
console.log(numbers2);
numbers2 = [
    9,
    ...numbers,
]
console.log(numbers2);
