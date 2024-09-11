/**
 * this
 * JS는 Lexical Scope를 사용하기 때문에 함수의 상위 스코프가 정의 시점에 평가된다. 
 * 하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다. (중요!)
 */

const testFunction = function(){
    return this;
}
console.log(testFunction()); // global object와 매핑되어 있다.
// 일반 함수로 실행하면 this 키워드가 global object에 매핑된다. 
// global object -> 웹에서는 window 객체
console.log(testFunction() === global);
const seongjin1 = {
    name: '안성진',
    year: 2000,
    sayHello: function(){
        return `안녕하세요, 저는 ${this.name}입니다. `; // this -> 현재 객체
    },
}
console.log(seongjin1.sayHello());
function Person(name, year){
    this.name = name;
    this.year = year;
    this.sayHello = function(){
        return `안녕하세요, 저는 ${this.name}입니다.`;
    }
}
const seongjin2 = new Person('안성진', 2000);
console.log(seongjin2.sayHello()); // this -> 실제 seongjin2 객체에 매핑된다. 
Person.prototype.dance = function(){
    function dance2(){
        return `${this.name}(이)가 춤을 춥니다. `
    }
    return dance2();
    //return `${this.name}(이)가 춤을 춥니다. `;
}
// console.log(seongjin2.dance()); // this -> 실행하는 대상의 객체로 매핑된다.  
console.log(seongjin2.dance()); // this.name -> undefined로 매핑된다. 
// 객체의 메서드로 가장 상위 레벨에 함수 선언 시 this가 자동으로 실행하는 대상의 객체로 매핑된다.
// 그 외의 위치에 선언 -> 함수의 this는 global object에 매핑된다.
/**
 * this 키워드가 어떤 것을 가르키는가?
 * 1) 일반 함수를 호출할 땐 this가 최상위 객체(global 또는 window)를 가리킨다.
 * 2) 메서드로 호출할 땐 호출된 객체를 가리킨다. 
 * 3) new 키워드를 사용해서 객체를 생성했을 땐 객체를 가리킨다. 
 */
/**
 * 원하는 this 값으로 this를 매핑(바인딩)하는 방법
 * 1) apply()
 * 2) call()
 * 3) bind()
 */
function returnName() {
    return this.name;
}
console.log(returnName()); // global 에 매핑 -> undefined
const seongjin3 = {
    name: '안성진3',
}
console.log(returnName.call(seongjin3)); // returnName을 seongjin3에 바인딩해서 call 한다. 
console.log(returnName.apply(seongjin3));
/**
 * 1) call -> 컴마를 기반으로 아규먼트를 순서대로 넘겨주낟. 
 * 2) apply -> 아규먼트를 리스트로 입력해야 한다. 
 */
function multiply(x, y, z){
    return `${this.name} / 결과값: ${x * y * z}`;
}
console.log(multiply.call(seongjin3, 3, 4, 5));
console.log(multiply.apply(seongjin3, [3, 4, 5])); 
// call과 apply는 실행하는 순간 바로 계산이 된다. 
// bind - this를 바인딩만 하고 나중에 실행할 수 있다. 
const laterFunc = multiply.bind(seongjin3, 3, 4, 5);
console.log(laterFunc);
console.log(laterFunc());