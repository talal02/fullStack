# Solution

```js
function getSeries(n) {
  let x = 0;
  for(let i = 1; i <= n; i++) {
    x += Math.pow(i, 3);
  }
  return x;
}

function findNb(m) {
    let i = 1;
  let num = -99999;
    while(num < m) {
      num = getSeries(i);
      if(num == m) {
        return i;
      }
      i++;
    }
    return (-1);
}

```
