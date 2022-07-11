export const isPalindrome = (input: number) => {
  if (input > -1) {
    const split = input.toString().split('');
    let reverseArr = [];
    for (let i = 1; i <= split.length; i++) {
      reverseArr.push(split[split.length - i]);
    }
    let count = 0;
    for (let i = 0; i <= reverseArr.length - 1; i++) {
      if (reverseArr[i] === split[i]) {
        count = count + 1;
      }
    }
    return count == reverseArr.length ? true : false;
  }
  return false;
};


