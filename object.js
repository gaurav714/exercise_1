/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
//exercise 1
var person = {firstName:"John", lastName:"Doe"};
console.log(person.firstName);

//exercise 2
var person = {firstName:"John", lastName:"Doe"};
person.country="USA";
console.log(person.country);

//exercise 3
var obj={name:"John",age:50,};
console.log(obj.name+" is "+obj.age+" years old");






//JavaScript Object exercise 1

var obj={Name:"John",Color:"blue"};
var prop=[];
prop=Object.keys(obj);
console.log(prop);


//exercise 2
var student =  { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12  };
console.log(student);
delete student.rollno;
console.log(student);



//javascript exercise 3

Object.objsize = function(Myobj) {
    var osize = 0, key;
    for (key in Myobj) {
        if (Myobj.hasOwnProperty(key)) osize++;
    }
    return osize;
};
var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

var objsize = Object.objsize(student);
console.log('Size of the current object : '+objsize);




//JavaScript Object exercise 4
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) 
    {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }

//javascript object exercise 5
function Cylinder(cyl_height, cyl_diameter) {
  this.cyl_height = cyl_height;
  this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.Volume = function () {
  var radius = this.cyl_diameter / 2;
  return this.cyl_height * Math.PI * radius * radius;
};

var cyl = new Cylinder(7, 4);
// Volume of the cylinder with four decimal places.
console.log('volume =', cyl.Volume().toFixed(4));

// javascript exercise 6
Array.prototype.bubbleSort_algo = function() 
{
var is_sorted = false;
 while (!is_sorted) 
 {
    is_sorted = true;
    for (var n = 0; n < this.length - 1; n++) 
    {
      if (this[n] > this[n+1]){
        var x = this[n+1];
        this[n+1] = this[n];
        this[n] = x;
        is_sorted = false;
      }
    }
  }
  return this;
};

console.log([6,4,0, 3,-2,1].bubbleSort_algo());



//javascript exercise 7

var x="Dog";
var i,j,len=x.length;
var substr=[];
console.log(len);

for(i=0;i<len;i++)
  {
    for(j=i+1;j<=len;j++)
      {
        substr.push(x.substring(i,j));
      }
  }
console.log(substr);


//javascript exercise 8

while(1)
{

 var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
console.log(h+":"+m+":"+s);
  }



// javascript exercise 9

function area(rad)
{
    return 2*3.24*rad;
}
function volume(rad)
{
    return 3.24*rad*rad*rad;
}
var rad = prompt("Please enter radius");

console.log(area(rad));
console.log(volume(rad));



// javascript exercise 10

var library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
var i,j,len=library.length;

for(i=0;i<len;i++)
    {
        for(j=0;j<len-i-1;j++)
            {
                if(library[j].libraryID<library[j+1].libraryID)
                    {
                        var swap=library[j];
                        library[j]=library[j+1];
                        library[j+1]=swap;
                    }
            }
    }
console.log(library);



//javascript exercise 11

function all_properties(obj)
{
  return(Object.getOwnPropertyNames(obj));
}
console.log(all_properties(Array));



//javascript exercise 14

var obj={Name:"John",Color:"blue"};
var prop=[];
prop=Object.values(obj);
console.log(prop);




//javascript exercise 15


var obj={Name:"John",Color:"blue"};
var pair=[],val=[],key=[];

val=Object.values(obj);
key=Object.keys(obj);
var len=val.length;
var i=0;
for(i=0;i<len;i++)
  {
    pair[i] = [key[i], val[i]];
  }
console.log(pair);





//exercise 16

var obj={Name:"John",Color:"blue"};
var pair=[],val=[],key=[];

val=Object.values(obj);
key=Object.keys(obj);
var len=val.length;
var i=0;
for(i=0;i<len;i++)
  {
    pair[i] = [val[i],key[i]];
  }
console.log(pair);



//exercise 17

console.log(hasOwnProperty.call({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}, "green"));

