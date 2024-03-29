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

export function translatePigLatin(str: string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const addedVal = vowels.indexOf(str.charAt(0)) < 0;
  let stopLoop = false;

  str.split('').map((char) => {
    if (vowels.indexOf(char) < 0 && !stopLoop) {
      console.log(char);
      str =
        str.slice(1, str.length) +
        str.slice(str.indexOf(char), str.indexOf(char) + 1);
    } else {
      stopLoop = true;
    }
  });
  return addedVal ? (str = str + 'ay') : (str = str + 'way');
}

// Search and Replace

function myReplace(sentence, string1, string2) {
  return sentence
    .split(' ')
    .map((str) => (str === string1 ? (str = string2) : str))
    .join(' ');
}

// DNA Pairing

function pairElement(str: string) {
  return str.split('').map((letter) => {
    if (letter === 'A') {
      return ['A', 'T'];
    } else if (letter === 'T') {
      return ['T', 'A'];
    } else if (letter === 'C') {
      return ['C', 'G'];
    } else if (letter === 'G') {
      return ['G', 'C'];
    }
  });
}

// ************ Missing letters starts ************

function fearNotLetter(str) {
  const format = 'abcdefghijklmnopqrstuvwxyz';
  let min;
  let max;
  let exp;

  min = format.indexOf(str.split('')[0]);
  max = format.indexOf(str.split('')[str.length - 1]);
  exp = format.slice(min, max + 1);

  const [man] = exp.split('').filter((strl) => str.indexOf(strl) < 0);
  return man;
}

// tweaked solution one liner

function fearNotLetterOneLiner(str) {
  const [man] = 'abcdefghijklmnopqrstuvwxyz'
    .slice(
      'abcdefghijklmnopqrstuvwxyz'.indexOf(str.split('')[0]),
      'abcdefghijklmnopqrstuvwxyz'.indexOf(str.split('')[str.length - 1]) + 1
    )
    .split('')
    .filter((strl) => str.indexOf(strl) < 0);
  return man;
}

// ************ Missing Letters Ends ************

function uniteUnique(...arr) {
  return [...new Set(arr.reduce((acc, val) => acc.concat(val), []))];
}

function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }
  return str.split("").map(
    strin => htmlEntities[strin] || strin
  ).join("");
}



// ************ Sum All Odd Fibonacci Numbers ************


function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}


// ************ Sum All Prime Numbers ************


  // Helper function to check primality
  function isPrime(num) {
    if(num<2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }

  function sumOfAllPrimes(num:number){
   return Array.from({length:num}, (_,v) => v+1).filter(i => isPrime(i)).reduce((a,b)=> a+b,0)

  }

  function sumPrimes(num) {
    // Check all numbers for primality
      let sum = 0;
      for (let i = 2; i <= num; i++) {
        if (isPrime(i))
          sum += i;
      }
      return sum;
  }
  

  // ************ Flatten Array To Infinite level************
  
  function steamrollArray(arr:any[]) {
    const flatArr = []
    arr.forEach((item)=>{
      if(Array.isArray(item)){
  
        flatArr.push(...steamrollArray(item))
  
      }else{
        flatArr.push(item)
      }
    })
    return  flatArr
  }
  