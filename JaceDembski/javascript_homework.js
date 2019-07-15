var homework = {};
module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function(n){
  var a = 0;
  var b = 1;
  var count = 2;
  if(n==1)
  {
    return a;
  }
  else if(n==2)
  {
    return b;
  }
  else
  {
    var c = b;
    do
    {
      c = a + b;
      a = b;
      b = c;
      count++;
    } while(count<n)
    return b;
  }
};

/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/
homework.sort = function(array) {
  let done = false;
  let numSorted = 0;
  while(!done)
  {
    for(var i = 0; i < (array.length-1)-numSorted; i++) {
      if(array[i] > array[i+1])
      {
        let c = array[i+1]
        array[i+1] = array[i];
        array[i] = c;
      }
    }
    numSorted++;
  }  
};

/*
  3. Return the factorial of n

  f(0) = 1
  f(1) = 1
  f(3) = 6
*/
homework.factorial = function(n){

  if(n == 0) {
    return 1;
  }
  else {
    let sum = 1;
    while(n>1)
    {
      sum *= n--;
    }
    return sum;
  }
};

/*
  4. Rotate left

  Given array, rotate left n times and return array

  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]

*/
homework.rotateLeft = function(array, n) {
  for(var i = 0; i < n; i++)
  {
    let c = array[0];
    for(var j = 0; j < array.length - 2; j++)
    {
      array[j] = array[j+1];
    }
    array[array.length-1] = c;
  }
  return array;
};

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
