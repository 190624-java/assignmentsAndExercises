var homework = {};
//module.exports = homework;



/*
  1. Return the nth fibonacci number
  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function(n){
    let fib = [];
    /*
    fib.push(0); // set initial values
    fib.push(1);
    for(let i = 0; i < n; i++) {
        fib.push(fib[i + 1]+ fib[i]);
    }
    for(let i = 0; i < n; i++) {
        console.log(fib[i]);
    }
    */

    // alternate way
    fib[0] = 0;
    fib[1] = 1;
    for(let i = 1; i < n - 1; i++) {
        fib[i + 1] = fib[i] +fib[i - 1]
    }
    for(let i = 0; i < n; i++) {
        console.log(fib[i]);
    }
};

/*
  2. Sort array of integers
  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]
  Don't use the Array sort() method... that would be lame.
*/
homework.sort = function(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(array[i] < array[j]) {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    // print output
    for(let i = 0; i < array.length; i++) {
        console.log(array);
    }
};

/*
  3. Return the factorial of n
  f(0) = 1
  f(1) = 1
  f(3) = 6
*/
homework.factorial = function(n){
    // recursive approach
    if(n == 0) return 1;
    else return n * homework.factorial(n - 1)
}

/*
  4. Rotate left
  Given array, rotate left n times and return array
  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]
*/
homework.rotateLeft = function(array, n) {
    if(n > array.length) n = n % array.length; //when rotation is more 
    let firstElement = array[0]; // to tag on at the end
    for(let k = 0; k < n; k++) {
        for(let i = 0; i < array.length - 1; i++) {
            array[i] = array[i + 1];
        }
        array[array.length - 1] = firstElement;
        firstElement = array[0]; // reset first element 
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
    if(bracketsString % 2 != 0) return false; // odd number of chars, never balanced
    let length = bracketsString.length;
    let firstHalf = bracketsString.substring(0, length / 2);
    let lastHalf = bracketsString.substring(length / 2, length);
    for(let i = 0; i < length / 2; i++) {
        console.log(lastHalf);
        if(!firstHalf.charAt(i) == lastHalf.charAt(length - i - 1)) return false;
    }
    return true; 
};

