# INTERVIW QUESTIONS

### 1. Difference between null & underfined

- Null is assigned, and explicitly means nothing. Purposely, declared variables are assigned null
```
var iAmUseless = null;
console.log(iAmUseless);
// Null is an object 
console.log(typeof(iAmUseless))
```

- Undefined is variable that has been declared but we didn't assigned value yet.
```
var iAmStandby;
console.log(iAmStandby);
// undefined is undefined
console.log(typeof(iAmStandby))
```

**`== ignores datatype but === do check datatype also while comparing`**
```
// null !== undefined
console.log(null !== undefined)
// null == undefined
console.log(null == undefined)
```


### 2. What is NaN?

- Not a Number, it is property of global object.
- It is variable in global scope with initial value of NaN...
 1. When result is mathematically not possible e.g. Math.sqrt(-1)
 2. One of the values in expression is NaN e.g. NaN + 2
 3. Indeterminate form e.g. Infinity/Infinity
 4. String operation other than + e.g. "h1" / "hello"
 5. A value that can't be parsed as Number e.g. Number("h1")
 6. Two NaN's aren't equal because Infinity/Infinity != Math.sqrt(-1)

