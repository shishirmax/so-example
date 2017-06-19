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
