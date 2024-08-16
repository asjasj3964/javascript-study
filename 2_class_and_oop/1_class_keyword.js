class StudentModel{
    name;// = '안성진';
    year;// = 2000;
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
// constructor - 생성자

const seongjin = new StudentModel('안성진', 2000);
console.log(seongjin);