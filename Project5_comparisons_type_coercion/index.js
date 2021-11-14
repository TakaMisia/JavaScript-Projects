//infinity/negative
document.write(2E310) ; 
document.write(-2E310); 
///boalen
document.getElementById("index").innerHTML = Boolean (12>24) ;
document.getElementById("index1").innerHTML = Boolean (12<=24) ; 
document.getElementById("index2").innerHTML = Boolean (12==12) ;
document.getElementById("index3").innerHTML = Boolean (12>4) ; 
//console log
console.log(23+32) ;
console.log (22<12);
//double and triple equal sign
console.log(13==13);
X=3;
Y=4;
console.log(X===Y);

a=3;
b=3;
console.log(a===b); 

//coercion
document.write("20" + 30);
//logical operations and
document.write(5>2 && 10>4); //return true because both are true
document.write(5>10&&10>4); // first is flsesecond true results false 
//or 
document.write(5>10 || 10>4); //true while 5 is not greater than 10, 10 is greater than 4
document.write(5>10 || 10>4); //false
//not 
function not_function(){
    document.getElementById ("not") .innerHTML = !(2>10);   // return false
}
function not_function(){
    document.getElementById ("not") .innerHTML = !(20>10);   // return true
}
//ternary opration 
document.write(Bigger = (5>1) ? "Left number is bigger" : "Right number is bigger"); 
// true 