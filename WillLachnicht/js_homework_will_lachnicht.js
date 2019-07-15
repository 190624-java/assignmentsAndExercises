var homework = {};
module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function(n){
  var i;
  var fi;
  var fib = [];
  fib[0] = 0;
  fib[1] = 1;
  for(i = 2; i <= n; i++)
  {
      fib[i] = fib[i - 2] + fib[i - 1];
      fi = fib[i];
    }
    console.log(fi);
};

/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/
homework.sort = function(array) {

  var n = array.length;
  for (var i = 0; i < n; i++)
  {
    for(var j = 0; j < n - i - 1; j++)
    {
      if(array[j] > array[j + 1])
      {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  console.log(array.join(' '));
};

/*
  3. Return the factorial of n

  f(0) = 1
  f(1) = 1
  f(3) = 6
*/
homework.factorial = function(n){

    if(n === 0)
    {
      return 1;
    }
    return x * this.factorial(x-1);
};

/*
  4. Rotate left

  Given array, rotate left n times and return array

  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]

*/
homework.rotateLeft = function(array, n) {
  for(i = 0; i < n; i++)
  {
    [array[0], array[1], array[2], array[3], array[4]] = [array[1], array[2], array[3], array[4], array[0]];
  }
  console.log(array.join(' '));
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
