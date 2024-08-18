// static keyword - 클래스에 귀속되도록 한다. 
class StudentModel{
    name;
    year;
    static groupName = '인하대'; // 공통적인 그룹 이름
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    static returnGroupName(){
        return '인하대';
    }
}
const seongjin = new StudentModel('안성진', 2000);
console.log(seongjin);
console.log(StudentModel.groupName); // 인스턴스가 아닌 클래스 자체에 귀속된다. 
console.log(StudentModel.returnGroupName()); 

class StudentModel2{
    name;
    year;
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    /** factory constructor */
    static fromObject(object){ // Object로부터 클래스 인스턴스 생성
        return new StudentModel2(
            object.name,
            object.year,
        );
    }
    static fromList(list){
        return new StudentModel2(
            list[0],
            list[1],
        );
    }
}
const seongjin2 = StudentModel2.fromObject({
    name:'안성진2',
    year:2000,
});
console.log(seongjin2);
const seongjin3 = StudentModel2.fromList([
    '안성진3',
    2000
]);
console.log(seongjin3);