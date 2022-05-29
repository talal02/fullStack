# Arrays in JavaScript
We often need to store **multiple values in one variable** then instead of `var` we use an `Array`. In JS, we have an Array class, and arrays are the prototype of this class.
**`var numbers = [1, 2, 3];`**
_Here **`numbers`** is an array, storing `3` values._
****
####  1. Create an Array
   - **Using an array litteral, `[]`**. For example,
      **`const names = ['Aastha', 'Binod'];`**
   - **Using the new Keyword, `new Array()`**. For example,
      **`const names = new Array('Aastha', 'Binod');`**
   - More examples of array;
      ```
      // array of strings
      const srings = ['A', 'B', 'C'];
      // array of numbers
      const numbers = [1, 2.33, 4];
      // array containing mixed data types
      const mix = [1, 'A', true, 3.14];
      // an empty array
      const empty = []
      // an array containing functions, arrays
      const data = [
        [1, 2,'A', true],
        function greet(name) { console.log(`Hey, ${name}`); }
      ];
      ```
#### 2. Accessing Elements of an Array
   - We can access elements using `indices [0, 1, 2]` e.t.c. For Example,
      ```
      const strings = ['A', 'B', 'C'];
      // length is 3
      console.log(strings.length);
      // first element (A)
      console.log(strings[0]); // indices start at 0
      // last element (C)
      console.log(strings[2]) // last index is (length of array - 1)
      ```
#### 3. Operations in an Array
   - **Add an element,** we can use keyword `push` to add element to an array. **Element will be added at the end of the array**. For Example,
      ```
      let arr = [1]; // array containing one element [1]
      arr.push(2); // adds element 2 at end of array
      console.log(arr); // arr = [1, 2];
      ```
   - **Remove an element,** we can use keyword `pop` to remove element from an array. **Element will be removed from the end of the array**. For Example,
      ```
      let arr = [1, 2, 3]; // array containing three elements
      arr.pop(); // removes element from the end of array
      console.log(arr); // arr = [1, 2];
      ```
   - **Update an element,** we can just use **assignment operator** `=` to update value of element. For Example,
      ```
      let arr = [1, 2, 3, 4]; // an array containing 4 elments
      arr[0] = 99; // update array element at index 0
      console.log(arr); // arr = [99, 2, 3, 4];
      ```