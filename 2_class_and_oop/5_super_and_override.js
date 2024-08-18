class StudentModel{
    name;
    year;
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    sayHello(){
        return `안녕하세요, ${this.name}입니다. `
    }
}
class FemaleStudentModel extends StudentModel{
    major; // 특수 property
    constructor(name, year, major){
        super(name, year); // 부모 클래스의 constructor를 우선적으로 사용한다. 
        this.major = major;
    }
    sayHello(){ // 재정의
        //return `안녕하세요, ${this.name}입니다. ${this.major}(을)를 전공하고 있습니다. `;
        // property를 불러올 때 super 키워드를 함수 안에서 쓰면 안된다. 
        return `${super.sayHello()} ${this.major}(을)를 전공하고 있습니다. `
        // 함수를 불러올 땐 super 키워드를 사용할 수 있다. 
    }
}
class MaleStudentModel extends StudentModel{
    
}
const seongjin = new FemaleStudentModel('안성진', 2000, '컴퓨터공학과');
console.log(seongjin);
const beomgeun = new StudentModel('구범근', 2000);
console.log(beomgeun);
console.log(beomgeun.sayHello());
console.log(seongjin.sayHello());