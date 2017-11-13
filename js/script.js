// this declares the variable my var
var myVar;
// this sets the value of the myVar variable to number .7
myVar = .7;

// This declares the my Name variable and sets it to the string value of Kurt
var myName = 'Jessica';

// A double quoted string cannot contain double quotes within unless they are escaped with backslash
// same applies for single quoted strings
var mySentence = "What's up";

//Strings cannot break lines by default.
var myLongString = "This actually isn't too long";

// Booleans are either true or false
var myBoolean = false;

var numA = 14;
var numB = 27;

// addition in js is done with the + symbol
var sumOfAandB = numA +  numB;

/*This reassigns the value of the numA variable to 32, This does not affect the line
above but will effect the line below */

//Subtraction is done with the -
var numAminusNumB = numA - numB;

//Multiplication is done through an *
var numC = 3 * 3;


//divison is done with the /
var numD = 4/2;

//Exponents are done with **
var myExponent = 2 ** 4;

/* modulus is done with a % returning the remainder after division
5 % 2 = 1
*/

var myModulus = 5 % 2;

// This is concatination adding two strings together. spaces must be put in manually.
var myFullName = myName + " Gross";

// This creates the me variable and assigns it to be an object
var me = {
  // objects are made of names key value pairs
  name: "Jessica Gross",
  age: 28,
  isAwesome: true,
  address: {
    street: "Spring Street",
    zipCode: 11609,
    state: "NY"
  }
};
//Properties on the me object would generally be accessed using dot notation
// me.name would return Jessica Gross, me.address.street would return Spring Street

console.log(me.age);
// using dot notation you can set the age property on the me object to the value of 29
me.age = 29;

console.log(me.age);

/* Arrays are key value pairs where the key is a number, arrays are created using
[], each element within an array is seperated by a ,
*/
var myArr = [55, "Tiger", true, me];

/* Arrays on JavaScript start with a 0 index, to access elements within an array use [] with the
index number, myArr[0] would be 55, myArr[1] would be Tiger */
console.log(myArr[0]);

//objects can hold arrays as the value for Properties
// This adds a hobbies property to the object and sets it to be in an array
me.hobbies = ["Code", "Music", "Food", "Games"];

console.log(me.hobbies[0]);


var something;
//something is undefined the variable was declared the value has not been set
console.log(something);

//if you try to use a variable that has not been defined it will throw you an error and stop executing
//console.log(somethingElse);

// if you try to inspect anything else it will not run
//console.log('Not going to happen');

//null is nothing
var nothing = null;

//This is a function declaration that creates a function called sayHello
function sayHello() {
  console.log("Welcome to JavaScript City!");
}
//funtion declarations do not end in a ;

//This calls or invokes the sayHello function.
sayHello();

//This works because function declaractions are moved to the top of the document by the browser
sayHelloTo("meeee");

/*variables created within a function are only available within that function
this is called function scope */
function sayHelloTo(name) {
  var message = "Welcome to JavaScript City " + name + "!";
  console.log(message);
}

// sayHelloTo("Jess");
// sayHelloTo(myFullName);
// // if you don't set a value for variable it will come back undefined
// sayHelloTo();

/*This will throw an error
sumNums();
because you are calling sumNums before it is defined
*/

// This is a function expression that creates a function called sumNums
var sumNums = function(firstNum, secondNum) {
  var sum = firstNum + secondNum;
  //This will return the value of the sum variable to where the function is called
  return sum;
  //Once a return statement is triggered no furthur code within the function is executed
  console.log("this will never execute");
};

sumNums(2,2);

//console.log(sumNums(2,2));

var mySum = sumNums(923, 123456);

//console.log(mySum);
