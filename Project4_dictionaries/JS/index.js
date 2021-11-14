
function my_Family () {
    var daughter = {
     firstname: "Victoria" ,
     age: 9 ,
     eyes: "blue" , 
     hair :"blond"
 };
delete daughter.age ; // deleted element displayed undefined
 document.getElementById ("Family").innerHTML = daughter.firstname + " is " + daughter.age  + " weeks old and She have " + daughter.eyes + " eyes and " + daughter.hair + " hair. She is beauty!" ;
 }


 // nan javascript
 function nan_function() {
     document.getElementById ("NAN").innerHTML = isNaN ('This is not a number');
 } ;// true 

 function nan_function() {
    document.getElementById ("NAN").innerHTML = isNaN ('02');
} ;// false

function nan_function() {
    document.getElementById ("NAN").innerHTML = isNaN ('0/0');
} ;// nan



