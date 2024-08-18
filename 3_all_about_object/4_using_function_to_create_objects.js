function StudentModel(name, year){
    //console.log(this);
    if(!new.target) { // new 키워드가 붙었는지 확인한다.
        // new.target이 undefined일 경우 (new 키워드가 붙지 않았다면) 
        return new StudentModel(name, year); // 강제로 new 키워드를 붙여서 생성자 함수로 실행시킨다.  
    }
    this.name = name;
    this.year = year;
    this.study = function(){
        return `${this.name}(이)가 공부를 합니다.`
    }
    // return {}; // Object 반환 시 그대로 {}가 반환된다.
    // return 123; // Object가 아닌 아무 것을 입력하면 제대로 된 객체가 반환된다. -> 굳이 쓸 필욘 없음
}
const seongjin = new StudentModel('안성진', 2000); // new를 쓸 경우 this를 어디에 매핑하는지를 결정하게 된다. 
console.log(seongjin);
console.log(seongjin.study());
const seongjin2 = StudentModel('안성진', 2000); // new를 안 쓸 경우 함수에서 반환해주는 것이 없으므로 undefined가 나온다. 
console.log(seongjin2);
console.log(global); // 파일 생성 시 자동으로 생성되는 객체, name과 year가 여기에 저장된다. 
console.log(global.name); // new를 안 쓰고 생성자 함수를 실행하면 this 키워드가 global에 붙어 global 값들을 설정하게 된다. 

const StudentModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
};
const seongjin3 = new StudentModelArrow('안성진3', 2000);
// StudentModelArrow is not a constructor -> Arrow 함수는 생성자 함수가 아니다. 
// new 키워드는 일반 함수에서만 쓸 수 있다. 