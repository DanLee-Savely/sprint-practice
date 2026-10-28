// 고차함수
// 함수의 매개변수로 다른 함수를 받는 함수
// 또 다른 함수를 리턴하는 함수

const numbers: number[] = [1, 2, 3, 4, 5];

const makeTwice = () => {
  const newNumbers: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    newNumbers.push(numbers[i]! * 2);
  }
  return newNumbers;
}
console.log(makeTwice());

const newNumbers2: number[] = [];
for (let i = 0; i < numbers.length; i++) {
  newNumbers2.push(numbers[i]! * 3);
}
console.log(newNumbers2);
