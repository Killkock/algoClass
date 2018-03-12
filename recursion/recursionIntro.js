//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

//2. Next, try looping just like above except using recursion

function loop(n) {
  if (n === 0) return;
  console.log(n);
  return loop(n - 1);
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

function recursiveExponent(base, exp) {
  return recursion(exp, 1);

  function recursion(n, res) {
    if (n === 0) return res;
    return recursion(n - 1, res * base);
  }
}

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

function recursiveMultiplier(arr, num) {
  var n = arr.length - 1;

  return recursion(n)

  function recursion(n) {
    if (!arr[n]) return arr;
    arr[n] *= num;
    return recursion(n-1);
  }
}

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

function recursiveReverse(arr, result) {
  if (!result) result = [];
  if (arr.length === 0) return result;

  return recursiveReverse(arr.slice(1), [arr[0], ...result]);
}
