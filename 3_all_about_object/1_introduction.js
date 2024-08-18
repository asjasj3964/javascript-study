/**
 * 객체를 선언할 때 사용할 수 있는 방법
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - Class와 OOP
 * 3) function을 사용해서 객체 생성
 */

let seongjin = {
    name:'안성진',
    year:25
}
console.log(seongjin);
class StudentModle{
    name;
    year;
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
seongjin = new StudentModle('안성진', 25);
console.log(seongjin);
// 생성자 함수
function StudentFunction(name, year){
    this.name = name;
    this.year = year;
}
seongjin = new StudentFunction('구범근', 25);
console.log(seongjin);