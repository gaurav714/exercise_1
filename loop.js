/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
//exercise 2
var i;
for (i = 5; i < 10; i++) 
{
    console.log(i);
}

//exercise 3
var i;
for (i = 5; i <= 50; i++) 
{
  if(i%5==0)
    {
      console.log(i);
    }
}

//exercise 5
var text = "";
var food = ["Pizza", "Beans", "Tacos", "Fish", "Chicken"];
var i;
var len=food.length;
for(i=0;i<len;i++)
  {
    console.log("i love "+food[i]);
  }

//while exercise
//exercise 3
var i = 5;
while (i <=50) {
  console.log(i);
  i=i+5
}

//ehile exercise 4
var i = 10;
while (i>=0) {
  console.log(i);
  i=i-1;
}


//break and continue
//exercise 1
var i;
for (i = 1; i < 10; i++) {
    if (i === 5) break;
    else{
      console.log(i);
    }
}

//exercise 2
var i;
for (i = 1; i < 10; i++) {
    if (i === 5) continue;
    else{
      console.log(i);
    }
}

//exercise 3
var i;
for (i = 1; i < 10; i++) {
    if (i === 5 || i===7) continue;
    else{
      console.log(i);
    }
}

//exercise 4
