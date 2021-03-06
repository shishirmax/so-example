//Factorial
function factorial(n){
if(n===1){
  return 1;
}
return n * factorial(n-1);
}
//Reverse String

function reverse(str){
  if(str.length<=1){
    return str;
  }
  return reverse(str.substr(1))+str[0];
}
//JS Currying
var yoo = function(str1){
  return function(str2){
    var result = str1.concat('').contact(str2);
    return result;
  };
};

var belo = yoo('Hey Ya Boy,');
belo('How are you!!');


//closure - closure is a stateful function.
/*
global variable: not self contained, error prone, maintenance issue
closures: isolated stateful function(closure is function inside function)
closures: helps to implement OOP in JavaScript programming.
A closure is the combination of a function and the lexical environment which that function
was declared.
*/
function counter(){
  var counter = 0;
  //this function is enclosed inside other function
  var increment = function(){
    counter++;
    alert(counter);
  }
  return{
    increment
  }
}
var x = counter();
x.increment();
x.increment();

var x1 = counter();
x1.increment();
/*
principles of OOP
abstraction: show what is necessary
encapsulation: hide complexity
inheritance: parent child
polymorphism: depending on situation diff behaviour
*/

//prototype:to share properties among objects
function PrintReport(ReportDocument){
  this.reportDoc = ReportDocument;
}
// We add the print () method to PrintStuff prototype
//property so that other instances (objects) can inherit it:
PrintReport.prototype.print = function(){
  console.log(this.reportDoc);
}

/*
// Create a new object with the PrintStuff () constructor,
thus allowing this new object to inherit PrintStuff's properties and methods
*/

var newObject = new PrintReport("Hey printing the first report.");

/*
​// newObj inherited all the properties and methods, including the print method,
from the PrintStuff function. Now newObj can call print directly,
even though we never created a print () method on it.​
newObj.print (); //I am a new Object and I can print.

*/
newObject.print();
