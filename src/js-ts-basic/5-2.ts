// 고차함수
// 함수의 매개변수로 다른 함수를 받는 함수
// 또 다른 함수를 리턴하는 함수

const map = (callback: (v: number) => number, numbers: number[]) => {
  const newNumbers: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    newNumbers.push(callback(numbers[i]!));
  }
  return newNumbers;
};

console.log(map((v: number) => 2 * v, [1, 2, 3]));
console.log(map((v: number) => 3 * v + 10, [1, 2, 3, 4]));
