# Solution
```
function calculateSum(arr, start, end) {
  let sum = 0;
  for(let i = start; i <= end; i++) {
    sum += arr[i];
  }
  return sum;
}

var maxSequence = function(arr){
  if(arr.length == 0) {
    return 0;
  }
  let max = -99;
  for(let i = 0; i < arr.length; i++) {
    for(let j = i; j < arr.length; j++) {
      let x = calculateSum(arr, i, j);
      if (max < x) {
        max = x;
      }
    }
  }
  if(max < 0) {
    return 0;
  }
  return max;
}
```