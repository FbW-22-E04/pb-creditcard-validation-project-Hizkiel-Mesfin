function validateCreditCard(ccNum) {
  const numStr = "0123456789-";
  const numStr2 = "0123456789";
  const numArr = ccNum.split("");
  let sum = 0;

  for (let i = 0; i < numArr.length; i++) {
    if (numStr2.includes(numArr[i])) {
      sum += Number(numArr[i]);
    }
  }

  for (let i = 0; i < ccNum.length; i++) {
    if (ccNum.length == 16 + 3) {
      if (numArr.every((el) => numStr.includes(el))) {
        if (!numArr.every((el) => el == numArr[0])) {
          if (numArr[numArr.length - 1] % 2 == 0) {
            if (sum > 16) {
            } else {
              return `Invalid, number: ${ccNum}, error: sum of all the number should exceed 16`;
            }
          } else {
            return `Invalid, number: ${ccNum}, error: last cc number doesn't container an even number`;
          }
        } else {
          return `Invalid, number: ${ccNum}, error: cc number contains the same numbers`;
        }
      } else {
        return `Invalid, number: ${ccNum}, error: cc number includes other character`;
      }
    } else {
      return `Invalid, number: ${ccNum}, error: cc number is longer or shorter`;
    }
  }

  return `valid Credit card number`;
}

// console.log(validateCreditCard("9939-1111-1111-0000"));

// ccNum.length == 16 + 3
// numArr.every((el) => numStr.includes(el))
// !numArr.every((el) => el == numArr[0])
// numArr[numArr.length - 1] % 2 == 0
// sum > 16

/**** tests *****/
console.log(validateCreditCard("9999777788880000")); //{ valid: true, number: '9999-7777-8888-0000' }
console.log(validateCreditCard("6666-6666-6666-1666")); //{ valid: true, number: '6666-6666-6666-1666' }
console.log(validateCreditCard("a923-3211-9c01-1112")); //{ valid: false,number: 'a923-3211-9c01-1112',error: '_invalid characters_' }
console.log(validateCreditCard("4444-4444-4444-4444")); //{ valid: false,number: '4444-4444-4444-4444',error: '_only one type of number_' }
console.log(validateCreditCard("1211-1111-1111-1112")); //{ valid: true, number: '1211-1111-1111-1112' }
