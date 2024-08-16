let star = '';
for (i = 0; i < 10; i ++){
    for (j = 0; j < 10; j ++){
        star += '*';
    }
    star += '\n';
}
console.log(star);
console.log('--------------------');
const seongjin = {
    name:'안성진',
    age:25
}
for (let key in seongjin){
    console.log(key);
}
console.log('--------------------');
const inhaStudentsArray = ['안성진', '구범근', '임가희', '유승환', '류남경', '전규민'];
for (let key in inhaStudentsArray){
    console.log(key);
    console.log(`${key}:${inhaStudentsArray[key]}`)
}
for (let value of inhaStudentsArray){
    console.log(value);
}