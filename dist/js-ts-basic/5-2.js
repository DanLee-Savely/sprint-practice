// 고차함수
// 함수의 매개변수로 다른 함수를 받는 함수
// 또 다른 함수를 리턴하는 함수
const numbers = [1, 2, 3, 4, 5];
const newNumbers1 = [];
for (let i = 0; i < numbers.length; i++) {
    newNumbers1.push(numbers[i] * 2);
}
console.log(newNumbers1);
const newNumbers2 = [];
for (let i = 0; i < numbers.length; i++) {
    newNumbers2.push(numbers[i] * 3);
}
console.log(newNumbers2);
export {};
//# sourceMappingURL=5-2.js.map