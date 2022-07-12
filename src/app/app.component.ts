import { Component } from '@angular/core';
import { isPalindrome, isPalindromeUsingTwoPointer } from './palindrome';
import { removeDuplicates } from './removeDuplicatesFromSortedArray';
import { twoSum } from './twoSum';
import { isValid } from './validParanthesis';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    // console.log(isPalindrome(1001));
    // console.log(
    //   'isPalindromeUsingTwoPointer ' + isPalindromeUsingTwoPointer(101)
    // );
    // console.log(twoSum([1, -2, 3, 4, 5], 5));
    // console.log(isValid('()'));
    // console.log(removeDuplicates([1, 1, 2]));
  }
}
