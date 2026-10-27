// 변수와 원시값
// 변수
// : 값에 이름을 붙인 것
// : const(값을 변경할 수 없음), let(값을 변경할 수 있음)
// : 일단 const로 변수를 선언하고, 필요한 경우에만 let을 사용한다.
// 원시값
// : 문자열(string): "김민수", '김민수', `김민수`
// : 숫자(number): 1, NaN, Infinity
// : 참거짓(boolean): true, false
// : 값이 정의되지 않았다(undefined): undefined
// : 값이 비어있다(null): null
// : 큰 정수(몰라도 됩니다)
// : 심볼(몰라도 됩니다)

const name1: string = "김민수";
const age1: number = 25;
const isMarried1: boolean = false;
console.log(`프로필: ${name1}님은 ${age1}살입니다.`);

const name2: string = "김민지";
const age2: number = 21;
const isMarried2: boolean = false;
console.log(`프로필: ${name2}님은 ${age2}살입니다.`);

let x: undefined;
console.log(x);

let y: null = null;
console.log(y);

// 타입 변환
// 숫자를 문자열로 변환: String(숫자)
// 문자를 숫자로 변환: Number(숫자), 실패시 NaN
console.log(String(27));
console.log(Number("27"));
