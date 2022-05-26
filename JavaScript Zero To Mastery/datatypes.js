
// Six Data Types are primitives in JavaScript...
// 1. undefined
// 2. Boolean
// 3. Number
// 4. String
// 5. BigInt
// 6. Symbol

// String is enclosed in '', "" 
var myName = "Talal";
console.log('myName is ' + typeof(myName));

// Number any integer, float values
var myAge = 19;
console.log('myAge is ' +typeof(myAge));
myAge = 3.1416;
console.log('myAge is ' +typeof(myAge));

// Boolean can be true and false
var overEighteen = true;
console.log('overEighteen is ' +typeof(overEighteen));

// undefined anything declared but not initialized
var hello;
console.log('Hello is ' + hello);



// Challenge Time
// 10 + "20" (Number + String) -> String with concat
console.log(10+"20")
console.log(typeof(10+"20"))

// 9 - "5" (Number - String) -> Number 
console.log(9 - "5")
console.log(typeof(9 - "5"))

// "Java" + "Script" (String + String) -> String
console.log("Java" + "Script")
console.log(typeof("Java" + "Script"))

// String - String -> Nan (Number)
console.log("vinod" - "vinod")
console.log(typeof("vinod" - "vinod"))

// True represents 1 and False represents 0
// true + true -> Number (2)

console.log(true + true)
console.log(typeof(true + true))

// true - true -> Number (0)
console.log(true - true)
console.log(typeof(true - true))

// true + false -> Number (1)
console.log(true + false)
console.log(typeof(true + false))
