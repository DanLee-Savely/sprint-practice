// 고차함수
// 함수의 매개변수로 다른 함수를 받는 함수
// 또 다른 함수를 리턴하는 함수
const map = (callback, numbers) => {
    const newNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        newNumbers.push(callback(numbers[i]));
    }
    return newNumbers;
};
console.log(map((v) => 2 * v, [1, 2, 3]));
console.log(map((v) => 3 * v + 10, [1, 2, 3, 4]));
// 사용자가 편하게 쓸 수 있도록 준비된 고차함수들
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.map((v) => 2 * v));
console.log(numbers.filter((v) => (v % 2 === 0 ? true : false)));
console.log(numbers.find((v) => (v === 3 ? true : false)));
export {};
//# sourceMappingURL=5-2.js.map