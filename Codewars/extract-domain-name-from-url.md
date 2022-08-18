# Solution

```js
function domainName(url){
  let str = "";
  if(url.includes("https://")) {
    str = url.split("https://")[1]
    if(str.split('.')[0] === "www") {
      return str.split('.')[1];
    }
    return str.split('.')[0];
  } else if(url.includes("http://")) {
    str = url.split("http://")[1]
    if(str.split('.')[0] === "www") {
      return str.split('.')[1];
    }
    return str.split('.')[0];
  } 
  if(url.split(".")[0] === "www") {
    return url.split(".")[1];
  }
  return url.split(".")[0];
}
```