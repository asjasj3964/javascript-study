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
console.log(numbers.sort((a, b) => {
    return a > b ? 1 : -1;
} ));
// a, b를 비교했을 때 
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
console.log(numbers.sort((a, b) => {
    return a > b ? -1 : 1;
} ));
console.log(inhaStudentsArray.map((x) => x));
console.log(inhaStudentsArray.map((x) => `인하대 ${x}`));
console.log(inhaStudentsArray.map((x) => {
    if (x === '안성진'){
        return `휴학생 ${x}`;
    }
    else{
        return x;
    }
}));
console.log(inhaStudentsArray); // 변경된 것이 없다. 
numbers = [ 2, 8, 2, 5, 1, 1 ];
console.log(numbers.filter((x) => true));
console.log(numbers.filter((x) => false));
// 모든 값에 대해 순회하면서 true를 반환하면 반환 값에 들어가고 
// false를 반환하면 반환 값에 들어가지 않는다. 
console.log(numbers.filter((x) => x % 2 === 0));
console.log(numbers.find((x) => x % 2 === 0));
// true에 해당하는 첫번째 값만 반환한다. 
console.log(numbers.findIndex((x) => x % 2 === 0));
// true에 해당하는 첫번째 값의 인덱스를 반환한다. 
console.log(numbers.reduce((p, n) => p + n, 0)) // ((previous, next) => { }, 시작하고 싶은 값)
// n에 Array의 값이 하나씩 들어간다. 
// 함수(loop)가 실행될 때마다 기존 loop에서 반환한 값이 p에 들어간다. 
// 함수를 처음 실행할 경우 0(두번째 parameter)을 p에 넣어준다. 
console.log(inhaStudentsArray.reduce((p, n) => p + n.length, 0));