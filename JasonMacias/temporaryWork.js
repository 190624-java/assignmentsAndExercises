// a different approach for balancedBrackets
balancedBrackets = function(bracketsString){
  let isBalanced = false;
  const strArr = bracketsString.split("");
  let checkedIndex = -1; // external variable to keep track of closing bracket index
  const closeBracket = bracket => bracket === "[" ? "]" : bracket === "{" ? "}" : ")"; // for getting closing brackes from opening
  const bracketStringArr = bracketsString.split("");

  function getRange(arr, beginIndex) {
    // function to get closing bracket index, if exists, given an array and the index of opening bracket.
    let endIndex = -1;
    let beginChar = arr[beginIndex];
    for (let i = beginIndex; i < arr.length; i++ ) {
      if (closeBracket(beginChar) === arr[i]) {
        endIndex = i;
      }
    }
    return endIndex;
    // index where bracket closes, or -1 if no closure
  }

  function breakStringArr(arr) {
    // function to break a string up into substrings by opening/closing brackets
    const breakpoints = [];
    const arrays = [];
    for (let i = 0; i < strArr.length; i++) {
      // if an index has been checked, skip it
      if (i <= checkedIndex) {
        continue;
      }
      let resIndex = getRange(strArr, 0);
      breakpoints.push(resIndex);
      checkedIndex = resIndex;
    }
    if (checkedIndex === -1) {
      // no closing brackets
      return false;
    }
    let breakPointCounter = 0;
    for (let x of breakpoints) {
      const subArr = arr.slice(breakPointCounter, x + 1);
      breakPointCounter = x + 1;
      arrays.push(subArr);
    }
    // last unsliced section
    arrays.push(arr.slice(breakPointCounter));
    // returning array of sub-arrays
    return arrays;
  }

  function reduceBrokenString(arr) {
    // function to recursively remove opening/closing first and last characters of an array until firs/last no longer match.  Returns false if this subarr proves string is unbalanced, true if this array was ok (all nested open/close brackets), and the subarray if it cannot be reduced (i.e., needs to be broken down).
    if (arr.length > 1 && arr[0] === arr[arr.length -1]) {
      // array reduced, to be run through again
      arr.pop();
      arr.shift();
    }
    else if (arr.length > 1) {
      // subarray can't be reduced, returned back down stack
      return arr;
    }
    else if (arr.length === 1) {
      // only one character left, cannot be balanced, returning false
      return false;
    }
    else if (arr.length < 1) {
      // array consisted entirely of nested brackets, this one is good, returning true
      return true;
    }
    return reduceBrokenString(arr);

  }

  function main(arr) {
    // takes in split bracket string
    const broken = breakStringArr(arr);
    if (broken === false) {
      isBalanced = false;
      break;
    }
    // continue logic for dealing with array of subarrays
  }

  res = main(bracketStringArr);

  return isBalanced;
};


console.log(balancedBrackets("[[]]"));