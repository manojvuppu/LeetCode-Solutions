import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    console.log(isPalindrome(121));
  }
}

// Two Sum

function twoSum(nums: number[], target: number): number[] {
  let arr = [];
  nums.forEach((element, index) => {
    element + nums[index + 1] === target ? (arr = [index, index + 1]) : [];
  });
  return arr;
}


// isPalindrome

function isPalindrome(x: number): boolean {
  if (x > -1) {
    let input = x.toString().split('');
    let reverseArray = [];
    for (let x = 1; x <= input.length; x++) {
      reverseArray.push(input[input.length - x]);
    }
    let count = 0;
    for (let x = 0; x <= input.length - 1; x++) {
      if (input[x] === reverseArray[x]) {
        count = count + 1;
      }
    }
    return count == reverseArray.length ? true : false;
  } 
    return false;
  
}


