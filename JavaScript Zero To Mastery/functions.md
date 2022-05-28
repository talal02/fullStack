# Functions
_It is a block of code written to perform a particular task._
****
####  1. Function Definition
   - _Before we use a `function`, we need to define it. It consists of the `function` keyword, followed by `name of the function`, `a list of parameters` (enclosed in `parentheses ()` and separated by `comma ,`) and a `block of statements` (enclosed in `curly brackets {...}`)._
   - e.g.
        ```
        function name(parameter1, parameter2, ...) {
            // statements
        }
        ```
#### 2. Calling Function
   - _Defining a `function` does not executes it. Function is called when something `invokes (calls)` it._
   - e.g. 
      ```
      // defining sum function
      function sum(a, b) { 
          console.log(a + b);
      }
      // calling sum function
      sum(2, 3); 
      ```
##### 3. Function Parameter
   - _Function parameters are the names listed in function's definition._
   - e.g.
      ```
      function name(a, b, c) {
          // statements
      }
      // Here a, b, c are function parameters
      ```
##### 4. Function Arguments
   - _Function arguments are the real values passed to the function_
   - e.g.
      ```
      function name(a, b, c) {
          // statement
      }
      name(10, 20, 30);
      // 10, 20, 30 are function arguments.
      ```
##### 5. Return Keyword
   -  _`Return keyword` is used to return value from the function._
   -  _`Value is returned back to the caller function` and function execution is `stopped`._
   -  e.g.
      ```
      // defining sum function
      function sum(a, b) { 
          return a+b; // returning sum from function
      }
      // Showing returned sum on console.
      console.log(sum(5, 10)); 
      ```
#### 6. Anonymous Function
   - _An anonymous function is a function without a name._
   - _An anonymous function is not **accessible after its initial creation**. Therefore, you often need to `assign it to a variable`_.
   - e.g.
      ```
      let show = function() {
        console.log('Anonymous function');
      };
      show();
      ```
