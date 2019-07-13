var homework = {};
module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function(n){
  if (n < 0 || !n || isNaN(n)) {
    if (n === 0) {return 0}
    console.log("Please pass an integer that is >= zero");
    return -1;
  }
  
  if (n === 1) {
    return 1;
  }
  
  const fibArr = [0, 1]
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      continue;
    };
    let prev = fibArr[i-1];
    let prev2 = fibArr[i-2];
    fibArr.push(prev + prev2);
  }
  return fibArr[fibArr.length - 1];
};

/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/
homework.sort = function(array) {
  /*Bubble sort- 
    setting up flag to be set as false in do while loop and
    toggled to true if any indexes were swapped in this pass
    so that loop can be stopped if the whole array is looped
    through without a swap*/
  let swapped;
  do {
    swapped = false;
    /* bubble sort loop, comparing value at index i with
      following value and swapping if first is greater*/
    for (let i = 0; i < array.length -1 ; i++) {
      if (array[i] > array[i+1]) {
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        swapped = true;
      }	
    }
  }
  while(swapped);
  // return sorted array
  return array;
};

/*
  3. Return the factorial of n

  f(0) = 1
  f(1) = 1
  f(3) = 6
*/
homework.factorial = function(n){
  // recursive function
    if (n === 0) {
      return 1;
    }

  return n = n * homework.factorial(n-1);
};



/*
  4. Rotate left

  Given array, rotate left n times and return array

  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]

*/
// Fixed, now going the right direction
homework.rotateLeft = function(array, n) {
  const array2 = array.map(function(x, i) {
    let shiftIndex = i + n;
    while (shiftIndex > array.length - 1) {
      shiftIndex = shiftIndex - array.length;
      // shiftIndex += array.length;
    }
    let y = array[shiftIndex];
    
    return y;
  });
  return array2;
};
// console.log(rotateLeft([1, 2, 3, 4], 1));

/*
  Bonus: Balanced Brackets

  A bracket is any one of the following: (, ), {, }, [, or ]

  The following are balanced brackets:
    ()
    ()()
    (())
    ({[]})

  The following are NOT balanced brackets:
  (
  )
  (()
  ([)]

  Return true if balanced
  Return false if not balanced
*/
homework.balancedBrackets = function(bracketsString){

};
