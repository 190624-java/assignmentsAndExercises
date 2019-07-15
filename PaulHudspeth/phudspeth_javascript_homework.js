var homework = {};
module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function (n) {
  let num = new Array(0,1);
  let fib;
  if (n > 1) 
  {
    for (i = 1; i <= n; i++) 
    {
      num.push(num[i-1] += num[i]);
      fib = num[i];
      console.log(fib);
    }
    return fib[n-1];
  }
  else
  {
    return 0;
  }
};

/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/
homework.sort = function (array) 
{
  for(let i = 0; i<array.length; i++)
  {
    for(let j = 0; j < array.length; j++)
    {
      if(array[i] < array[j])
      {
        let num = array[j];
        array[j] = array[i];
        array[i] = num;
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
homework.factorial = function (n) 
{
  if(n>0)
  {
    let count = 1;
    for(i=1;i<=n;i++)
    {
      count = count*i;
    }
    return count;
  }
  else{return 1;}
};

/*
  4. Rotate left

  Given array, rotate left n times and return array

  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]

*/
homework.rotateLeft = function (array, n) 
{
  let temp = new Array();
  let inum = n;
  while(inum>array.length)
  {
    inum -= array.length;
  }
  for(i=inum;i<array.length;i++)
  {
    temp.push(array[i]);
  }
  for(q=0;q<inum;q++)
  {
    temp.push(array[q]);
  }
  
  return temp;
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
