var homework = {};
module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/

homework.fibonacci = function (n) {

  var a = 0;
  var b = 1;
  var c;

  if(n === 0){
    return a;
  }

  if(n === 1) {
    return b;
  }

  for (i = 0; i < n-1; i++) {

    c = a + b;
    a = b;
    b = c;
  }
  return(c); 
};
 
/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/

homework.sort = function (array) {

  var done = false;

  while (!done) {
    done = true;
    for (i = 0; i < array.length; i = i + 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
};

/*
  3. Return the factorial of n

  f(0) = 1
  f(1) = 1
  f(3) = 6
*/
homework.factorial = function (n) {

  var number = n;

  if (n == 0) {
    n = 1;
  }
  for (i = 1; i < number; i++) {
    n = (n * i);
  }
  return n;
}

/*
  4. Rotate left

  Given array, rotate left n times and return array

  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]

*/
homework.rotateLeft = function (array, n) {

for(i = 0; i < n; i++) {
  array.push(array.shift());
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
homework.balancedBrackets = function (bracketsString) {

};