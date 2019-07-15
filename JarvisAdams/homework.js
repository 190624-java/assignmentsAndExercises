var homework = {};
module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function(n){
  
  //Method 1 - large complexity, but short code
  if(n==0) return 0;
  else if(n==1) return 1;
  return doFib(n-2) + doFib(n-1);

};

//method 2
/**
 * If n== 0 or 1, return 0 and 1 respectively.
 * If n < 0 return null (not intended for handling negative numbers)
 * else:
 * Create an array the size of n.
 * Until the array is full (i.e. at n),
 * store the results in the array.
 * The result = array(current-2) + array(current-1)
 */
var fibonacciResults = [];
function doFibonacci(previousResult, currentN, max) {
  if(currentN==max) return fibonacciResults[max-1];  
  if(currentN==0) return 0;
  else if(currentN==1) return 1;  
  
  
  //indexing starts at zero, and so does n.
  fibonacciResults[currentN] = fibonacciResults[currentN-2] + fibonacciResults[currentN-1];
  return doFibonacci(currentN+1, max);
}

//method 3
//passing in previousPrevious and previous to a function


//------------------------------
//end Question 1
//------------------------------

/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/
homework.sort = function(array) {

  let temp = 0;
  for(i = 0; i<array.length; i++){
    //set selection index
    let selIndex = i;
    for(j=i; j<array.length; j++)
      //if 
      if(array[j]<array[selIndex]) {
        //Swap values
        temp = array[j];
        array[j] = array[selIndex];
        array[selIndex]=temp;
      }
  }

};


//------------------------------
//end Question 2
//------------------------------




/*
  3. Return the factorial of n

  f(0) = 1
  f(1) = 1
  f(3) = 6
*/
homework.factorial = function(n){

  if(n=0) return 1;
  return n * this.factorial(n-1);

};


/*
  4. Rotate left

  Given array, rotate left n times and return array

  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]

*/
homework.rotateLeft = function(array, n) {
  if(n==0) return;
  temp = 0;
  for(i = 0; i<n; i++){

    if(array[i-1]<0){      
      array[n-1] = array[i];
    }
    else {
      array[i-1] = array[i];
    }
    
  }

  rotateLeft(array, n-1);

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
  //for each character in the string
  let chars = bracketsString.length
  for(i=0; i<chars; i++){
    //if one of the opening symbols cases, store it on the stack
    if(bracketsString[i] )
    //if one of the closing symbols cases, 
    // if there is a corresponding open bracket on the stack, pop it off
    // else return false
  }
  //if last character was proccessed, and there is an empty stack, 
  // return true
};