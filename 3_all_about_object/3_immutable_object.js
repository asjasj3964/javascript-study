const seongjin = {
    name:'안성진',
    year:25,
    get age(){
        return new Date().getFullYear() = this.year + 1;
    },
    set age(age){
        this.year = new Date().getFullYear() - age + 1;
    }
}
console.log(seongjin);
// Extensible - 확장이 가능한지에 대한 여부
console.log(Object.isExtensible(seongjin)); // 객체 생성 시 기본 Extensible 값은 true
seongjin['major'] = '컴퓨터공학과';
console.log(seongjin);
Object.preventExtensions(seongjin); // extensible을 false로 만들어준다.
console.log(Object.isExtensible(seongjin));
seongjin['groupName'] = '인하대'; // 값이 추가되지 않는다. 
console.log(seongjin);
delete seongjin['groupName']; // 삭제는 가능하고 추가는 불가능하다. 
console.log(seongjin);
// Seal - 봉인하다. 
const seongjin2 = {
    name:'안성진',
    year:25,
    get age(){
        return new Date().getFullYear() = this.year + 1;
    },
    set age(age){
        this.year = new Date().getFullYear() - age + 1;
    }
}
console.log(Object.isSealed(seongjin2)); // seal이 되어있는지 확인 (default - false(봉인되어있지 않음))
// 봉인되어 있을 경우 기본적인 Object 기능들을 다 할 수 있다. 
Object.seal(seongjin2); // 봉인
console.log(Object.isSealed(seongjin2));
seongjin2['groupName'] = '인하대'; // 값의 추가가 불가능하다. 
console.log(seongjin2);
delete seongjin2['name']; // 값의 삭제도 불가능하다. (에러 발생 X)
console.log(seongjin2);
console.log(Object.getOwnPropertyDescriptor(seongjin2, 'name')); // seal 상태여도 writable 변경이 잘 된다.
Object.defineProperty(seongjin2, 'name',{
    value:'안성진2',
    writable:false,
});
console.log(Object.getOwnPropertyDescriptor(seongjin2, 'name')); // seal - configuable을 false로 만드는 것과 같다. 
/**
 * Freezed - 아예 동결시킨다. 
 * 1) 읽기 외에 모든 기능을 불가능하게 한다. 
 */
const seongjin3 = {
    name:'안성진',
    year:25,
    get age(){
        return new Date().getFullYear() = this.year + 1;
    },
    set age(age){
        this.year = new Date().getFullYear() - age + 1;
    }
}
console.log(Object.isFrozen(seongjin3));
Object.freeze(seongjin3);
console.log(Object.isFrozen(seongjin3));
seongjin3['groupName'] = '인하대'; // 값의 추가가 불가능하다. 
console.log(seongjin3);
delete seongjin3['name']; // 값의 삭제도 불가능하다. (에러 발생 X)
console.log(seongjin3);
//Object.defineProperty(seongjin3, 'name', {
//    value:'안성진3',
//}) // Cannot redefine property: name
// freeze되어 값의 재정의가 불가능하다. 
console.log(Object.getOwnPropertyDescriptor(seongjin3, 'name'));
// 즉 freezed는 extensible + seal + writable:false
const seongjin4 = {
    name:'안성진',
    year:2000,
    beomgeun: { // Object안에 Object를 넣을 수 있다. 
        name:'구범근',
        year:2000,
    },
}
Object.freeze(seongjin4);
console.log(Object.isFrozen(seongjin4));
console.log(Object.isFrozen(seongjin4['beomgeun']));  // freeze해도 객체 내의 객체는 동결되지 않는다. 