/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

//exercise 1
function myFunction()
{
    console.log("Hello World!");
}
myFunction();         

//exercise 3
function myFunction() 
{
    return(5*5);
}
var ans=myFunction();
console.log(ans);

//exercise 4
function myFunction(name) 
{
    return ("Hello " + name);
}
console.log(myFunction("John"));

//exercise 1

function tellFortune(jobTitle, geoLocation, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);
}

tellFortune('footballer', 'spain', 'rock', 12);

