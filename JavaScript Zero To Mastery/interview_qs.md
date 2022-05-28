# INTERVIEW QUESTIONS

### 1. Difference between null & undefined

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

****
### 2. What is NaN?

- Not a Number, it is property of global object.
- It is variable in global scope with initial value of NaN...
 1. When result is mathematically not possible e.g. Math.sqrt(-1)
 2. One of the values in expression is NaN e.g. NaN + 2
 3. Indeterminate form e.g. Infinity/Infinity
 4. String operation other than + e.g. "h1" / "hello"
 5. A value that can't be parsed as Number e.g. Number("h1")
 6. Two NaN's aren't equal because Infinity/Infinity != Math.sqrt(-1)

****
### 3. What is difference between `==` and `===`?

- `==` is the comparison operator which compares the values of two operands
- e.g. **`5 == '5' returns true;`** because value of both operands is same. 
- - `===` is the comparison operator which compares the values of two operands as well as their datatype.
- e.g. **`5 === '5' returns false;`** because value of both operands is same but datatype is different. 

****

### 4. Why we use functions?

- We use functions to make code **`reuseable`** and to avoid **`redundant`** code.
- _Define the code once, and use it many times by just invoking it_.
- We can use same block of code many times with different arguments to produce different results. 