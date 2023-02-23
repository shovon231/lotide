let inputArg = process.argv;

const reverseFunc = function (inputArg) {
  let inputArr = inputArg.splice(2);
  console.log(inputArr.length);
  let result = [];
  for (let i = 0; i >= inputArr.length; i++) {
    result.push(inputArr[i]);
    console.log(result);
  }
  return result;
};

module.exports = reverseFunc;
