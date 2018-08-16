// This is a var example

for(var i = 0; i<10; i++) {
    console.log(i);
  }
  console.log(i);
  console.log("---------------------------------------");

// Scope function example  
  function printing(){
  for(var x = 0; x<10; x++) {
    console.log(x);
  };
}
printing();
console.log(x); //returns undefined because x is not a global variable. Only exists within the scope of function printing();
console.log("---------------------------------------");

// ??? code

(function (){
    for(var a = 0; a<10; a++) {
      console.log(a)
    }
  })()
// The above function is an attempt to keep variables in scope to the functions, this is usually called 'immediately invoked function expression'.

// The let keyword in action

for(let b = 0; b<10; b++) {
    console.log(b);
  }
  console.log(b);

// Makes it so that 'let' allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.  