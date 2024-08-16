/**
 * try ... catch
 * 1) 에러를 발생시킬 때 -> 던진다고 한다. (throw)
 * 2) 명시적으로 인지할 때 -> 쟙는다고 한다. (catch)
 */
function runner(){
    try{
        console.log('Hello');
        throw new Error('에러 발생'); // 에러 내용 작성
        // 에러를 던지는 순간 함수가 정지된다. 
        console.log('SeongJin!');
    } catch(e){
        console.log('-----catch!-----');
        console.log(e); // 에러 내용 출력
    } finally{ // 에러가 발생해도 무조건 실행되는 부분
        console.log('-----finally-----');
    }
}
runner();