# Control Statements & Loops
****
####  1. If..Else
   - The If statement executes a statement if given condition is true otherwise another statement in else block can be executed.
   - e.g.
        ```
        if(condition) {
            // statement
        } else if(condition2) {
            // statement
        } else {
            // statement
        }
        ```
#### 2. Switch Statement
   - It is a control statement that executes a set of logic based on the result of a comparison between a controlling expression and the labels specified in the switch block.
   - e.g. 
      ```
      switch(variable) {
          case 1:
             // statement
             break
          case 2:
             // statement
             break
          default:
             // statement
      }
      ```
##### 3. While Loop
   - It executes specified statements as long as condition is true
   - e.g.
      ```
      while(condition) {
          // statement
      }
      ```
##### 4. Do...While Loop
   - It is same as while loop but it always executes block of statements within its scope `one` time.
   - e.g.
      ```
      do {
          // statement
      } while(condition);
      ```
##### 5. For Loop
   -  It enables a particular set of conditions to be executed repeatedly until a condition is satisfied.
   -  e.g.
      ```
      for(initializer ; condition ; iteration) {
          // statement
      }
      ```