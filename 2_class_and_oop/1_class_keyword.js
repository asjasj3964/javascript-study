class StudentModel{
    //name;// = '안성진';
    //year;// = 2000; // property를 정의하는 것이 "옵션"
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    sayName(){
        return `안녕하세요, 저는 ${this.name}입니다. `;
    }
}
// constructor - 생성자

const seongjin = new StudentModel('안성진', 2000);
console.log(seongjin);
const beomgeun = new StudentModel('구범근', 2000)
console.log(beomgeun);
const lingard = new StudentModel('임가희', 2000)
console.log(lingard);
const transfer = new StudentModel('유승환', 2000)
console.log(transfer);
console.log(seongjin.name);
console.log(seongjin.year);
console.log(seongjin.sayName());
console.log(beomgeun.sayName());
console.log(typeof StudentModel);
console.log(typeof beomgeun);
