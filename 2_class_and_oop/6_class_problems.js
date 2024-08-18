/**
 * 1) Country 클래스는 나라 이름과 나라에 해당되는 아이돌 그룹 정보를 리스트로 들고 있다. 
 *    (name 프로퍼티, idolGroup 프로퍼티)
 * 2) IdolGroup 클래스는 아이돌 그룹 이름 정보와 멤버 정보를 리스트로 들고 있다. 
 *    (name 프로퍼티, members 프로퍼티)
 * 3) Idol 클래스는 아이돌 이름과 출생년도 정보를 들고 있다. 
 *    (name 프로퍼티, year 프로퍼티)
 * 4) MaleIdol 클래스는 Idol 클래스와 동일하게 name, year 프로퍼티가 존재한다. 
 *    추가로 sing() 함수를 실행하면 `${이름}이 노래를 합니다.` 라는 스트링을 반환한다. 
 * 5) FemaleIdol 클래스는 Idol 클래스와 동일하게 name, year 프로퍼티가 존재한다. 
 *    추가로 dance() 함수를 실행하면 `${이름}이 춤을 춥니다.` 라는 스트링을 반환한다. 
 * 
 * 아래 정보가 주어졌을 때 위 구조로 데이터로 형성해보라.
 * map() 함수를 잘 활용하면 좋다. 
 */
class Country{
    country;
    idolGroup;
    constructor(country, idolGroup){
        this.country = country;
        this.idolGroup = idolGroup;
    }
}
class IdolGroup{
    name;
    members;
    constructor(name, members){
        this.name = name;
        this.members = members;
    }
}
class Idol{
    name;
    year;
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
class MaleIdol extends Idol{
    constructor(name, year){
        super(name, year);
    }
    sing() {
        return `${this.name}(이)가 노래를 합니다.`;
    }
}
class FemaleIdol extends Idol{
    constructor(name, year){
        super(name, year);
    }
    dance() {
        return `${this.name}(이)가 춤을 춥니다.`;
    }
}

// 아이브: 한국 여자 아이돌
const iveMembers = [
    {
        name:'안유진',
        year:2003,
    },
    {
        name:'장원영',
        year:2004,
    },
    {
        name:'레이',
        year:2004,
    },
    {
        name:'가을',
        year:2002,
    },
    {
        name:'이서',
        year:2007,
    },
    {
        name:'리즈',
        year:2004,
    },
]
// 방탄소년단: 한국 남자 아이돌
const btsMembers = [
    {
        name:'진',
        year:1992,
    },
    {
        name:'RM',
        year:1994,
    },
    {
        name:'슈가',
        year:1993,
    },
    {
        name:'제이홉',
        year:1994,
    },
    {
        name:'지민',
        year:1995,
    },
    {
        name:'뷔',
        year:1995,
    },
    {
        name:'정국',
        year:1997,
    },
]
let koreanIdol = [
    iveMembers,
    btsMembers,
]

const iveGroup = new IdolGroup('아이브', iveMembers);
const btsGroup = new IdolGroup('방탄소년단', btsMembers);
console.log(iveGroup);
console.log(btsGroup);
const ive = iveMembers.map((member) => new FemaleIdol(member.name, member.year));
const bts = btsMembers.map((member) => new MaleIdol(member.name, member.year));
console.log(ive.map((member) => member.dance()));
console.log(bts.map((member) => member.sing()));
//const korea = new Country('대한민국', koreanIdol);
let korea = new Country(
    '대한민국',
    [
        iveGroup,
        btsGroup,
    ] // 깊이가 3번까지 들어가면 type으로만 출력된다. 
)
console.log(korea);

korea = new Country(
    '대한민국',
    [
        new IdolGroup(
            '아이브',
            iveMembers.map((member) => new FemaleIdol(member.name, member.year)),
        ),
        new IdolGroup(
            '방탄소년단',
            btsMembers.map((member) => new MaleIdol(member.name, member.year))
        ),
    ]
)

console.log(korea);
