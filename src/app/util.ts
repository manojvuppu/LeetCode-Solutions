export function spinalCase(str: string) {
  str = str.split('_').join('');
  const split = str.split(' ');
  const updated = [];
  split.forEach((item) => {
    let splititem;
    if (item.includes(' ')) {
      splititem = item.slice(0, item.indexOf(' '));
      updated.push(...splititem);
    } else if (isUpper(item)) {
      splititem = item.split(/(?=[A-Z])/);
      splititem = splititem;
      updated.push(...splititem);
    } else {
      updated.push(item);
    }
  });
  if (updated.length < 1) {
    updated.push(...split);
  }
  return updated.join('-').toLowerCase();
}

function isUpper(str) {
  return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}
