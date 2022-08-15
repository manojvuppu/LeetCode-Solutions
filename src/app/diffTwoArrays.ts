export const diffTwoArrays = (arr1, arr2) => {
  const temp = [];
  const unique = new Set([...arr1, ...arr2]);
  for (const key of unique) {
    const currentEle = key;
    if (arr1.includes(currentEle) && !arr2.includes(currentEle)) {
      temp.push(currentEle);
    } else if (!arr1.includes(currentEle) && arr2.includes(currentEle)) {
      temp.push(currentEle);
    }
  }
  return temp;
};
