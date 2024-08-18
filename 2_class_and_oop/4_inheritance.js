class StudentModel{
    name;
    year;
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
class FemaleStudentModel extends StudentModel {
    tennis(){
        return `여학생들이 테니스를 칩니다. `;
    }
}
class MaleStudentModel extends StudentModel{
    soccer(){
        return `남학생들이 축구를 합니다. `;
    }
}
const seongjin = new FemaleStudentModel('안성진', 2000);
console.log(seongjin);
const beomgeun = new MaleStudentModel('구범근', 2000);
console.log(beomgeun);
console.log(seongjin.tennis());
console.log(seongjin.name);
console.log(beomgeun.soccer());
console.log(beomgeun.year);
const lingard = new StudentModel('임가희', 2000);
// console.log(lingard.tennis()); // 부모가 자식 클래스의 프로퍼티를 상속받을 순 없다. 
console.log(seongjin instanceof StudentModel);
console.log(seongjin instanceof FemaleStudentModel);
console.log(seongjin instanceof MaleStudentModel);
console.log(lingard instanceof StudentModel);
console.log(lingard instanceof FemaleStudentModel);
console.log(lingard instanceof MaleStudentModel);