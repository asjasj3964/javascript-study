let inhaStudentsArray = [
    '안성진',
    '구범근',
    '임가희',
    '유승환',
    '류남경',
    '전규민'
];
console.log(inhaStudentsArray.push('안희진')); // array 길이 반환
console.log(inhaStudentsArray);
console.log(inhaStudentsArray.pop());
console.log(inhaStudentsArray);
console.log(inhaStudentsArray.shift());
console.log(inhaStudentsArray);
console.log(inhaStudentsArray.unshift('안성진'));
console.log(inhaStudentsArray);
console.log(inhaStudentsArray.splice(0, 3)); // 인덱스 0부터 3개를 삭제하고 그것들을 반환한다.
console.log(inhaStudentsArray);
inhaStudentsArray = [
    '안성진',
    '구범근',
    '임가희',
    '유승환',
    '류남경',
    '전규민'
];
console.log(inhaStudentsArray.concat('신복순')); // 원래 Arrar 변경 X, 다른 메모리 공간에 저장된 값이 반환된다. 
console.log(inhaStudentsArray);
console.log(inhaStudentsArray.slice(0, 3)); // 원래 Arrar 변경 X, 0번 인덱스부터 2번 인덱스까지 삭제(3번은 제외하고 삭제)
console.log(inhaStudentsArray);
let inhaStudentsArray2 = [
    ...inhaStudentsArray, // spread operator
    // inhaStudentsArray안의 모든 값들이 펼쳐져 inhaStudentsArray2에 저장된다. 
];
console.log(inhaStudentsArray2);
let inhaStudentsArray3 = [
    inhaStudentsArray, // 리스트 안의 리스트
];
console.log(inhaStudentsArray3);
let inhaStudentsArray4 = inhaStudentsArray;
console.log(inhaStudentsArray4);
console.log(inhaStudentsArray4 === inhaStudentsArray);
console.log([
    ...inhaStudentsArray,
] === inhaStudentsArray); // 새로운 Array 발생, 메모리 공간이 다르기 때문에 false
console.log(inhaStudentsArray.join());
console.log(typeof inhaStudentsArray.join());
console.log(inhaStudentsArray.join('/'));
console.log(inhaStudentsArray.sort());
console.log(inhaStudentsArray.reverse());
let numbers = [
    1, 4, 2, 6, 1, 8, 3
]
console.log(numbers.sort());
console.log(numbers.reverse());