
//  global

let Name = "Misia";
myFunction();

function myFunction() {
  document.getElementById("global").innerHTML = "My name is " + Name;
}
//inside
function function_inside() {
    let a = 4;
    document.getElementById("inside").innerHTML = a * a;
  }
// outside
  let a = 23;
 b = 1
function_outside();

function function_outside() {
  document.getElementById("outside").innerHTML ="I am " +  a * b + " years old. " ;
} 