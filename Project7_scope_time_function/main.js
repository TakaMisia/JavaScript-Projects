function_inside() ;

function function_inside() {
    let name = "Misia";
    document.getElementById("inside").innerHTML = typeof name + " " + name ; 
  }
  
// outside
var Dogname = "Lucky";
myFunction();

function myFunction() {
    document.getElementById("outside").innerHTML =
      typeof Dogname + "- " + "My dog name's " + Dogname;
}

document.getElementById("outside1").innerHTML =
   typeof Dogname + "- " + "My dog name is " + Dogname; 


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
function time_function() {
  var time = new Date ().getHours();
  var Reply;
  if (time < 12 == time > 0) {
    Reply = "Good morning!";
  }
  else   if (time > 12 == time < 18) {
    Reply = "Good afternoon!";
  }
  else {
    Reply = "good night";
  }
  document.getElementById("timecheck").innerHTML=Reply ;
}
var X = 23;
document.write (X) ; 
{
  let X = 33;
  document.write("<br>" + X) ; 
}
document.write ("<br>" + X);
//return function 
function return_Function(name) {
  return "welcome to the world " + name;
}
document.getElementById("return").innerHTML = return_Function("Victoria");
