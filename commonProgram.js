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
