// a different approach for balancedBrackets
balancedBrackets = function(bracketsString){
  let isBalanced = false;
  const strArr = bracketsString.split("");
  let checkedIndex = -1; // external variable to keep track of closing bracket index
  const closeBracket = bracket => bracket === "[" ? "]" : bracket === "{" ? "}" : ")"; // for getting closing brackes from opening

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
    let breakpoints = [];
    for (let i = 0; i < strArr.length; i++) {
      // if an index has been checked, skip it
      if (i <= checkedIndex) {
        continue;
      }
      let resIndex = getRange(strArr, 0);
      breakpoints.push(resIndex);
      checkedIndex = resIndex;
    }
    
  }
  return isBalanced;
};


console.log(balancedBrackets("[[]]"));