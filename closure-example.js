function Person(name){
  this.name = name;
}
var me = new Person("Shishir");
me
//Person{name:"Shishir"}
me.name
//"Shishir"




function Person(pName){
  var _name = pName;

  this.getName = function(){
    return _name;
  }
}

var me = new Person("Shishir");
me
//Person {getName:function}
me.getName()
//"Shishir"


/*
A JavaScript closure is a function that has a pointer reference to a free variable.
A free variable is one that has fallen out of scope after its parent function has returned.
However, if that outer function still has some reference to the
free var (normally through a function that gets returned, or through a method property),
the variable will not get garbage collected because it will have a non-zero reference count.
Thus, from outside the function, we can still access the inner variable by means of the closure.

*/
