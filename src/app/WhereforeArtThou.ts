//Using reduce most powerful way to filter... reduce will either reduce to boolean or array or object as this method is so powerful. Dont forget to return the accumulator and provide default value as well prolly boolean for most cases while filtering and return false if the condition fails or accumulator(since we declared true in the begining) as well

export const checkIfKeyvaluePairExistsInObject = <T>(
  sourceArray: T[],
  objectSource: T
) => {
  const keys = Object.keys(objectSource);
  return sourceArray.filter((obj) =>
    keys.reduce((acc, cur) => {
      return obj[cur] == objectSource[cur] ? acc : false;
    }, true)
  );
};

export const whatIsinAName = <R>(collectionArr: R[], sourceObj: R) => {
  return collectionArr.filter((obj) => {
    return Object.keys(sourceObj).every((key) => {
      console.log(Object.keys(obj).indexOf(key) > 0);
      return obj[key] == sourceObj[key];
    });
  });
};
