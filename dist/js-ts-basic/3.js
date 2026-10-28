// 연산자
// 기본 연산자
// = (오른쪽의 '값'을 왼쪽의 '변수'에 대입한다)
// +, -, *, /, %(나머지)
// +=, -=, /=, *=, %=
// ++, --
let x = 1;
console.log(x);
x = x + 1;
console.log(x);
x += 1;
console.log(x);
x++;
console.log(x);
// 비교 연산자
// ===, !==
// <, <=, >, >=
const y = 1;
console.log(y === 1);
console.log(y !== 2);
console.log(y < 1);
console.log(y <= 1);
// 논리 연산자
// && (and, 두 조건이 모두 참이면 참)
// || (or, 두 조건중 하나만 참이면 참)
// ! (not, 논리를 반대로 부정한다)
// 삼항 연산자
const z = 2;
// 삼항 연산자를 모르는 경우
const isEvenNumber = (n) => {
    if (n % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isEvenNumber(z));
// 삼항 연산자를 아는 경우
console.log(z % 2 === 0 ? true : false);
export {};
// 옵셔널 체이닝
// 널 병합 연산자
// 타입 체크 연산자
// 상속 체크 연산자
//# sourceMappingURL=3.js.map