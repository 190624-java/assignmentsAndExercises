var homework = {};
module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function(n){
  let curr = 1;
  let prev = 0;
  //let ans = 0;
  if(n==0){
    return 0;
  }
  else if(n>=1){
    for(let i=1;i<n;i++){
      let temp=curr+prev;
      prev=curr;
      curr=temp;
    }
    return curr;
  }
  else{
    return NaN;
  }
};
/*
function testFib (n){
  let curr = 1;
  let prev = 0;
  //let ans = 0;
  if(n==0){
    return 0;
  }
  else if(n>=1){
    for(let i=1;i<n;i++){
      let temp=curr+prev;
      prev=curr;
      curr=temp;
    }
    return curr;
  }
  else{
    return NaN;
  }
};
*/
/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/
homework.sort = function(array) {
  var count = 0;
  //selection sort
  let n=array.length;
        
  //for each index i = 0 ~ n-1 (outer loop)
  for(let i=0;i<n-1;i++)
  {
    let min=array[i];
    let minI=i;
    for(let j=i+1;j<n;j++)
    {
        
      if (array[j]<min)
      {
          
        min=array[j];
        minI=j;
      }
    }
    if (minI != i)
    {
      let tmp=array[i];
      array[i]=min;
      array[minI]=tmp;
    }
    
  }
  return array;
};
/*
function testSort(array) {
  var count = 0;
  //selection sort
  let n=array.length;
        
  //for each index i = 0 ~ n-1 (outer loop)
  for(let i=0;i<n-1;i++)
  {
    let min=array[i];
    let minI=i;
    for(let j=i+1;j<n;j++)
    {
        
      if (array[j]<min)
      {
          
        min=array[j];
        minI=j;
      }
    }
    if (minI != i)
    {
      let tmp=array[i];
      array[i]=min;
      array[minI]=tmp;
    }
    
  }
  return array;
};
*/
/*
  3. Return the factorial of n

  f(0) = 1
  f(1) = 1
  f(3) = 6
*/
homework.factorial = function(n){
  if(n>0){
    var i;
    var temp =n;
    while (temp>1){
      n=n*(--temp);
    }
    return n;
  }
};
/*
function testFact(n){
  if(n>0){
    var i;
    var temp =n;
    while (temp>1){
      n=n*(--temp);
    }
    return n;
  }
};
*/
/*
  4. Rotate left

  Given array, rotate left n times and return array

  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]

*/
homework.rotateLeft = function(array, n) {
  //shift the array and save the first element(the one that gets popped)
  //append it and that counts as one iteration
  for(let i=0;i<n;i++){
    let temp=array.shift();
    array.push(temp);
  }
  return array;

};

/*
function testShift(array, n) {
  //shift the array and save the first element(the one that gets popped)
  //append it and that counts as one iteration
  for(let i=0;i<n;i++){
    let temp=array.shift();
    array.push(temp);
  }
  return array;

};
*/
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