// if는 C++과 동일
let english = 'Monday';
let korean;
switch(english){
    case 'Monday':
        korean = '월요일';
        break;
    case 'Tuesday':
        korean = '화요일';
        break;
    case 'Wednesday':
        korean = '수요일';
        break;
    default:
        korean = '다른 평일이나 주말';
        break;
}
console.log(korean);