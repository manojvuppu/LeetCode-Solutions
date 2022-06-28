export const isValid = (s) => {
  const closeMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  if (s === null || s === undefined) return false;
  for (let i = 0; i < s.length; i++) {
    let curChar = s[i];
    let topEle;
    let charStack = [];

    if (closeMap[curChar]) {
      topEle = charStack.length === 0 ? '#' : charStack.pop();
      if (topEle !== closeMap[curChar]) return false;
    } else {
      charStack.push(curChar);
    }

    return charStack.length === 0;
  }
};
