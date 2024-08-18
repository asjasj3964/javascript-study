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