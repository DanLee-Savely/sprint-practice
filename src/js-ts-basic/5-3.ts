// 클로저

const outerFunction = () => {
  const x = 1;

  return () => {
    return x + 1;
  };
};

const innerFunction = outerFunction();
const result = innerFunction();
console.log(result);
