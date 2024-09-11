// prototype
const testObj = {};
console.log(testObj.__proto__);
// __proto__: 모든 객체에 존재하는 프로퍼티, 부모의 상속 체인
// class 강의에서 배울 때 상속에서 부모 클래스에 해당되는 값
// 클래스 또한 Object로 인스턴스화 된다. 
function StudentModel(name, year){
    this.name = name;
    this.year = year;
}
console.log(StudentModel.prototype); // 객체 {}
console.dir(StudentModel.prototype, {
    showHidden:true, // 숨겨진 값을 볼 수 있다.
}); 
// circular reference: 서로가 서로를 참조하고 있는 상태
console.log(StudentModel.prototype.constructor === StudentModel);
console.log(StudentModel.prototype.constructor.prototype === StudentModel.prototype);
const seongjin = new StudentModel('안성진', 2000);
console.log(seongjin.__proto__); // 실제 객체 존재
console.log(seongjin.__proto__ === StudentModel.prototype);
console.log(testObj.__proto__ === Object.prototype); // 자동으로 부모로 Object 프로토타입이 들어간다. 
console.log(StudentModel.__proto__ === Function.prototype); // StudentModel의 부모 -> Function
console.log(Function.prototype.__proto__ === Object.prototype); // Function prototype의 부모 -> Object
// StudentModel은 Object까지 상속 받는다. 
console.log(StudentModel.prototype.__proto__ === Object.prototype); // Student prototype의 부모 -> Object prototype
// StudentModel의 prototype은 최상위 위치가 Object.prototype이다. 
console.log(seongjin.toString()); // StudentModel 안에 toString 함수를 정의하지 않았지만 존재한다. 
console.log(Object.prototype.toString()); // Object의 prototype에 toString()이 존재한다. 
// StudentModel이 Object의 prototype에서 toString()을 상속받아 사용할 수 있는 것이다. 
function StudentModel2(name, year){
    this.name = name;
    this.year = year;
    this.sayHello = function(){
        return `${this.name}(이)가 인사를 한다. `;
    }
}
const seongjin2 = new StudentModel2('안성진2', 2000);
const seongjin3 = new StudentModel2('안성진3', 2000);
console.log(seongjin2.sayHello());
console.log(seongjin3.sayHello());
console.log(seongjin2.sayHello === seongjin3.sayHello); 
// 실제로 같은 기능의 sayHello이지만 메모리에선 다른 공간을 차지한다. -> 똑같은 기능을 중복으로 저장하므로 리소스가 낭비된다. 
console.log(seongjin2.hasOwnProperty('sayHello')) // 상속을 받은 프로퍼티(-> false)인지 고유로 갖고 있는 프로퍼티(-> true)인지 확인한다. 
// 즉, true일 시 sayHello 프로퍼티가 seongjin2 안에 선언된 객체이다.  
// false일 시 seongjin2 안에 선언된 객체가 아닌 상속 받은 프로퍼티이다. 
function StudentModel3(name, year){
    this.name = name;
    this.year = year;
}
StudentModel3.prototype.sayHello = function(){
    return `${this.name}(이)가 인사를 합니다. `; // StudentModel3 인스턴스에서 실행할 것이므로 name을 직접 사용해도 된다. 
}
const seongjin4 = new StudentModel3('안성진4', 2000);
const seongjin5 = new StudentModel3('안성진5', 2000);
console.log(seongjin4.sayHello());
console.log(seongjin5.sayHello());
console.log(seongjin4.sayHello === seongjin5.sayHello); // 한 공간에서만 sayHello 함수가 저장된다. -> 리소스 효율적으로 사용 가능
console.log(seongjin4.hasOwnProperty('sayHello')); 

StudentModel3.sayStaticHello = function(){ // StudentModel3에 sayStaticHello 함수를 만든다. 
    return '안녕하세요, 저는 static method입니다. ';
}
console.log(StudentModel3.sayStaticHello()); // 인스턴스엔 sayStaticHello가 정의되지 않는다. (static이기 때문)

// overriding
function studentModel4(name, year){
    this.name = name;
    this.year = year;
    this.sayHello = function(){
        return '안녕하세요, 저는 인스턴스 메서드입니다. '; // 오버라이딩 된다. 
    }
}
studentModel4.prototype.sayHello = function(){
    return '안녕하세요, 저는 prototype 메서드입니다.';
}
const seongjin6 = new studentModel4('안성진6', 2000);
console.log(seongjin6.sayHello()); // 프러퍼티 셰도잉 (= class의 override)
console.log('--------------------')
// 프로토타입이나 프로토타입 값을 변경할 수 있다. 
// = 상속 받는 클래스를 변경할 수 있다. 인스턴스 생성 후에도 가능하다. 
/**
 * getPrototypeOf, setPrototypeOf
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function StudentModel(name, year){ // 함수를 똑같은 이름으로 사용하면 덮어쓸 수 있다. 
    this.name = name;
    this.year = year;
}
StudentModel.prototype.sayHello = function(){
    return `${this.name}(이)가 인사를 합니다. `;
}
function FemaleStudentModel(name, year){
    this.name = name;
    this.year = year;
    this.dance = function(){
        return `${this.name}(이)가 공부를 합니다. `;
    }
}

const heejin1 = new StudentModel('희진1', 1998);
const heejin2 = new FemaleStudentModel('희진2', 1998);
console.log(heejin1.__proto__);
console.log(heejin1.__proto__ === StudentModel.prototype);
console.log(Object.getPrototypeOf(heejin1) === StudentModel.prototype); // heejin1의 __proto__를 가져온다. 
console.log(heejin1.sayHello());
console.log(heejin2.dance());
// console.log(heejin2.sayHello()) // 에러 발생, heejin2에는 sayHello를 선언하지 않음
console.log(Object.getPrototypeOf(heejin2) === FemaleStudentModel.prototype)
Object.setPrototypeOf(heejin2, StudentModel.prototype) // heejin2의 프로토타입을 StudentModel.prototype으로 바꾼다. (이미 상속된 객체의 프로토타입 체인을 변경시킴)
console.log(heejin2.sayHello());
console.log(heejin2.constructor === FemaleStudentModel); // 프로토를 바꿔 false가 나온다. 
// constructor - 모든 프로토타입에 존재한다. 함수를 가리키는 circular reference
console.log(heejin2.constructor === StudentModel); // 원래의 프로토타입과의 연결이 끊겼다.
console.log(heejin1.constructor === StudentModel);
console.log(Object.getPrototypeOf(heejin2) === FemaleStudentModel.prototype);
console.log(Object.getPrototypeOf(heejin2) === StudentModel.prototype);
console.log(FemaleStudentModel.prototype === StudentModel.prototype);
// FemaleStudentMode의 프로토타입은 그대로 유지됐으나 FemaleStudentModel과 heejin2 객체와의 연결만 끊겼다.
FemaleStudentModel.prototype = StudentModel.prototype; // 프로토타입 직접 변경
const gahee = new FemaleStudentModel('가희', 2000);
console.log(Object.getPrototypeOf(gahee) === FemaleStudentModel.prototype);
console.log(FemaleStudentModel.prototype === StudentModel.prototype);
// 함수에서 프로토타입을 직접 변경하면 new로 인스턴스를 생성할 때 변경된 프로토타입을 그대로 상속받는다. 
// 이미 객체를 생성한 후 객체의 프로토만 바꾸면 객체의 프로토만 변경되고 실제 객체 생성 시 사용한 함수의 프로토타입은 변경되지 않는다.
