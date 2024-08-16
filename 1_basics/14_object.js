let seongjin = {
    name:'안성진',
    age:25,
    maior:'컴퓨터공학과',
    sleep:function(){
        return `${this.name}이 잠을 잡니다.`; // this: 현재 객체
    }
};
console.log(seongjin);
console.log(seongjin.sleep);
console.log(seongjin['sleep']);
const key = 'sleep';
console.log(seongjin[key]);
console.log(seongjin.sleep());
console.log(seongjin['sleep']());
console.log(seongjin[key]());
const nameKey = 'name';
const nameValue = '에드워드 컬렌';
const movieKey = 'movie';
const movieValue = '트와일라잇';
const edward = {
    [nameKey]:nameValue,
    [movieKey]:movieValue,
    eat:function(){
        return `${this.name}dl 피를 빨아 마십니다. `;
    }
}
console.log(edward);
console.log(edward.eat());
edward['movie'] = '브레이킹던';
console.log(edward);
edward['englishName'] = 'Edward Cullen';
console.log(edward);
delete edward['englishName'];
console.log(edward);
/**
 * const로 선언한 객체의 특징
 * 1) const로 선언할 경우 객체 자체를 변경할 순 없다. 
 * 2) 객체 안의 프로퍼티나 메서드는 변경할 수 있다. 
 */
const bella = {
    name:'벨라 스완',
    movie:'트와일라잇',
}
console.log(bella);
// bella = {} // 아무 값도 없는 객체로 변환하고자 하면 에러가 발생한다. 
// bella는 const로 선언되었으므로 한 번 초기화되면 바꿀 수 없다. 
bella['movie'] = '브레이킹던';
console.log(bella);
console.log(Object.keys(bella)); // 모든 키 값 다 가져오기
console.log(Object.values(bella)); // 모든 value 값 다 가져오기
const name2 = '안희진';
const heejin = {
    name2, // name2:name2 처럼 key-value가 같으면 하나만 입력해도 된다.
}
console.log(heejin);