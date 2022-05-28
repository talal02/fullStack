# ECMAScript 2015
- ES6 was released in 2015 with major changes in JavaScript.
- This made language more easier to use.
****
#### 1. Let & Const
   - `let` & `const` have **Block Scope**. 
   - `Variables (var)` has **Function Scope**.
   - `const` variable **can not be changed**.
   - e.g. 
      ```
        var x = 10;
        // Here x is 10
        {
          let x = 2;
          // Here x is 2
        }
        {
            const x = 5;
            // Here x is 5 and can not be changed
        }
        // Here x is 10
      ```
#### 2. Template Literals (Strings)
   - These provide an easy way to `interpolate variables and expressions` into strings.
   - It starts and end with `back-tick `` `.
   - e.g.
      ```
      const myAge = 19;
      const myName = 'Talal';
      console.log(`My name is ${myName} and my age is ${myAge}`); // using template literals
      ```
#### 3. Default Parameters
   - These allow named parameters to be initialized with default values if no arguments are passed.
   - e.g.
      ```
      // default parameters a & b
      function sum(a = 1, b = 1) {
          return a + b;
      }
      // calling sum without arguments
      console.log(`Sum is ${sum()}`);
      ```
#### 4. Arrow Function
   - Arrow functions allows a short syntax for writing function expressions.
   - You do not need the `function` keyword, the `return` keyword, and **the curly brackets**.
   - e.g.
      ```
        // ES5
        var sum = function(x, y) {
           return x + y;
        }
        
        // ES6
        const sum = (x, y) => x + y;
        // With Return
        const sum = (x, y) => { return x + y; }
      ```
