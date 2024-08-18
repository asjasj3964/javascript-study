/**
 * Property Attirbute
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티
 * 2) 엑세서 프로퍼티 - 자체적으로 값을 가지고 있지 않지만 다른 값을 가져오거나 설정할 떄 호출되는 함수로 구성된 프로퍼티
 *                     ex. getter와 setter
 * */                    

const seongjin = {
    name:'안성진',
    year:2000,
};
console.log(Object.getOwnPropertyDescriptor(seongjin, 'name')); // 객체, 가져오고 싶은 프로퍼티의 키 값
// static 함수 (즉, 직접적으로 접근하는 함수)
console.log(Object.getOwnPropertyDescriptor(seongjin, 'year'));

/**
 * 1) value: 실제 property 값
 * 2) writable: 값을 수정할 수 있는지 여부, false로 설정하면 property 값을 수정할 수 없다. 
 * 3) enumerable: 열거가 가능한지에 대한 여부, for ... in loop 등을 사용할 수 있으면 true를 반환한다. 
 * 4) configurable: property attribute의 재정의가 가능한지에 대한 여부,
 *                  false일 경우 property 삭제나 attribute 변경이 금지된다. 
 *                  단, writable이 true일 경우 값 변경과 writable을 변경하는 건 가능하다. 
 */
console.log(Object.getOwnPropertyDescriptors(seongjin)); // 모든 property의 attribute 출력
const beomgeun = {
    name:'구범근',
    year:2000,
    get age(){
        return new Date().getFullYear() - this.year + 1; // 현재 년도를 알 수 있다. 
    },
    set age(age){
        this.year = new Date().getFullYear() - age + 1;
    }
}
console.log(seongjin);
console.log(beomgeun);
console.log(beomgeun.age);
beomgeun.age = 36;
console.log(beomgeun.age);
console.log(beomgeun.year);
console.log(Object.getOwnPropertyDescriptor(beomgeun, 'age'));
beomgeun.height = 172; // beomgeun['height'] = 172;
console.log(beomgeun);
console.log(Object.getOwnPropertyDescriptor(beomgeun, 'height'));
Object.defineProperty(beomgeun, 'height', { // attribute 값을 변경하면서 property를 추가한다. 
    value:172,
    writable:true,
    enumerable:true,
    configurable:true, // 추가하지 않으면 false
})
console.log(beomgeun);
console.log(Object.getOwnPropertyDescriptor(beomgeun, 'height'));
beomgeun.height = 180;
console.log(beomgeun);
// writable
Object.defineProperty(beomgeun, 'height',{
    writable:false,
}); // 이미 존재하는 프로퍼티는 재정의 할 떄 기존에 있떤 값들은 그대로 유지되고 추가한 값만 변경한다. 
console.log(Object.getOwnPropertyDescriptor(beomgeun, 'height'));
beomgeun.height = 172; // writable을 false로 만들면 프로퍼티의 값이 변경되지 않는다. 
console.log(beomgeun);
// enumerable
console.log(Object.keys(beomgeun));
for (let key in beomgeun){
    console.log(key);
}
Object.defineProperty(beomgeun, 'name', {
    enumerable:false,
})
console.log(Object.getOwnPropertyDescriptor(beomgeun, 'name'));
console.log(Object.keys(beomgeun));
for (let key in beomgeun){
    console.log(key);
} // enumerable:false여서 name은 열거되지 않는다. 
console.log(beomgeun);
console.log(beomgeun.name);
// configurable
Object.defineProperty(beomgeun, 'height', {
    writable:true,
    configurable:false,
});
console.log(Object.getOwnPropertyDescriptor(beomgeun, 'height'));
//Object.defineProperty(beomgeun, 'height', {
//    enumerable:false,
//});
// configurable이 false이므로 enumerable를 재정의할 수 없다. (Cannot redefine property: height)
Object.defineProperty(beomgeun, 'height', {
    value:190,
});
// writable:true일 경우엔 값의 재정의가 가능하다. 
console.log(Object.getOwnPropertyDescriptor(beomgeun, 'height')); 
Object.defineProperty(beomgeun, 'height', {
    writable:false,
}) // writable:true일 경우엔 writable의 재정의도 가능하다. 
console.log(Object.getOwnPropertyDescriptor(beomgeun, 'height')); 
Object.defineProperty(beomgeun, 'height', {
    writable:true,
}) // writable:false일 경우엔 writable의 재정의가 불가능하다. 