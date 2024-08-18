class StudentModel{
    name;
    year;
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    /**
     * getter
     * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2) private한 값을 반환할 때
     */
    get nameAndYear(){
        return `${this.name} - ${this.year}`; 
    }
    /**
     * setter
     * 값을 새로 저장할 때 
     */
    set setName(name){ // 보통 바꾸고 싶은 property와 이름을 겹치게 한다. 
        this.name = name;
    }
}
const seongjin = new StudentModel('안성진', 2000);
console.log(seongjin);
console.log(seongjin.nameAndYear); // nameAndYear()꼴로 정의하면 안된다. (getter는 함수가 아님) 
seongjin.setName = '구범근';
console.log(seongjin);

class StudentModel2{
    // 실제 값을 저장하나 외부에서 엑세스하지 못하는 값
    #name; // # -> private 값
    year;
    constructor(name, year){
        this.#name = name; // 엑세스 X
        this.year = year;
    }
    get name(){ // private 값을 가져올 수 있게 한다. 
        return this.#name;
    }
    set name(name){ // 많이 쓰지 않는 것을 권장
        this.#name = name;
    }
}
const beomgeun = new StudentModel2('구범근', 2000);
console.log(beomgeun);
console.log(beomgeun.name);
beomgeun.name = '안성진';
console.log(beomgeun.name);