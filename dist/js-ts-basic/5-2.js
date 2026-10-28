// 고차함수
// 함수의 매개변수로 다른 함수를 받는 함수
// 또 다른 함수를 리턴하는 함수
const numbers = [1, 2, 3, 4, 5];
const makeTwice = () => {
    const newNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        newNumbers.push(numbers[i] * 2);
    }
    return newNumbers;
};
console.log(makeTwice());
const makeTriple = () => {
    const newNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        newNumbers.push(numbers[i] * 3);
    }
    return newNumbers;
};
console.log(makeTriple());
export {};
//# sourceMappingURL=5-2.js.map