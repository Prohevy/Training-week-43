// Hello.
// This is a set of exercises.
// The idea is to practice a few things at a time.
// You do this by writing your answer after a task is given (see the example).
// Use the concepts from our sylabus. 

// DO NOT change the provided code unless the task specifically says to do so.

/* -----------------------------------------------------------------------------
    Task: Example
    Write code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    create a function that "draws" a tree of a given height.
    Example the following is a tree of height 5

           5        *
           4       ***
           3      *****
           2     *******
           1        x
*/
console.log("Task: A");

function drawTree(height) {
  
    for (let i = height; i > 0; i--) {
     
      let row = "";
  
      for (let j = 1; j <= height - i; j++) {
        row += " ";
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
      }
  
      console.log(row);
    }
  
    let base = "";
    for (let i = 1; i <= 2 * height - 1; i++) {
      base += "x";
    }
    console.log(base);
  }
  
  
  console.log("Task: A");
  drawTree(5);


/* -----------------------------------------------------------------------------
    Task: B

    Write a function that "draws" an arrow of a given size.
    Example: This is an arrow of size 3.

    *
    * *
    * * *
    * *
    * 
*/
console.log("Task: B");

function drawArrow(size) {
    for (let i = 1; i <= size; i++) {
      console.log("*".repeat(i));
    }
    for (let i = size - 1; i > 0; i--) {
      console.log("*".repeat(i));
    }
  }
  console.log("Task: B");
  drawArrow(3);

/* -----------------------------------------------------------------------------
    Task: C
    Write a function that draws a box of n by m dimensions. Take into acount the diffrence in aspectratio.

    Example: This is a aproximatly a 2 by 2 box. 
    +--------+
    |        |
    |        |
    +--------+
*/
console.log("Task: C");
function drawBox(n, m) {
  
    const aspectRatio = m / n;
  
    let height, width;
    if (aspectRatio > 1) {
      
      height = 10;
      width = Math.ceil(height * aspectRatio);
    } else {
   
      width = 10;
      height = Math.ceil(width / aspectRatio);
    }
    console.log("+".repeat(width + 2));
  
    for (let i = 0; i < height; i++) {
      console.log("|" + " ".repeat(width) + "|");
    }
  
    console.log("+".repeat(width + 2));
  }
  
  console.log("Task: C");
  drawBox(2, 3);


/* -----------------------------------------------------------------------------
    Task: D
    Write a function that returns true if a word is a Heterogram.   
*/
console.log ("Task: D")


/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/
console.log("Task: E");
