function function_inside() {
    let c = 4;
    document.getElementById("inside").innerHTML =a * a ;
  }
  
// outside
  var a = 23;
 b = 1
function_outside();

function function_outside() {
  document.getElementById("outside").innerHTML = a * b ;
} 

//if statement
function over18 (age){
  var ans="You cant go inside";
  if(age>=18){
      ans="Welcome to that page.";
  }
  document.write= ans ;
}
//date 
const s = new Date();
document.getElementById("datecheck").innerHTML = s.getTime();

//time 
function time_function() {
  alert('Hi you see that because i used time function to displayed communicate 1s later.');
}