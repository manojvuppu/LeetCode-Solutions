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

//without using map easy way to do

export const isPalindrome = (str) => {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '(':
        stack.push(')');
        break;
      case '{':
        stack.push('}');
        break;
      case '[':
        stack.push(']');
        break;
      default:
        if (str[i] !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
};
