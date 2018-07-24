/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

//exercise 1
if(5>2)
  {
    console.log("5 is greater than 2")
  }
//exercise 2
var firstName = "John";

if (firstName === "John") 
{
  console.log("hello Greg");
}

//exercise 3
var firstName = "Greg";

if (firstName === "John") {
   console.log("Hello John!");
}
else{
  console.log("you are not John!")
}

//exercise 1 of switch

  var text;
  var fruits="Apple";

  switch(fruits) 
  {
    case "Banana":
      text = "Banana is good!";
      break;
    case "Orange":
      text = "I am not a fan of orange.";
      break;

    case "Apple":
      text="How you like them apples.";
      break;

    default:
      text = "I have never heard of that fruit.";
  }
console.log(text);

// ternary operator
    var age, voteable;
    age = 21;
    voteable = (age < 18) ? "Too young":"Old enough";
    console.log("voteable");


//ternary 2

var firstName = "John";
  var result = (firstName=="John")? "Hello John":"Youre not John";
  console.log(result);


