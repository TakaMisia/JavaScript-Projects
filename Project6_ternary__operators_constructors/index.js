//tenary
function aqua_function() {
    var age = document.getElementById ("answer").value ; 
    let answer ;
 if ( age  < 16) {
answer =  "You are too young." ;
 } else {
 answer =  "Come in and enjoy!";
}
document.getElementById ("answer").innerHTML = answer;
}
//if
function time_function() {
if (new Date().getHours() < 12) {
  }
  document.getElementById("time").innerHTML = "Good afternoon!";

}

// new and this
function candidate (age, occupation, relationship ) {
    this.candidate_age = age;
    this.candidate_occupation = occupation; 
    this.candidate_relationship = relationship;
}
var Kasia = new candidate("23", "Manager", "Single");
var Piotr = new candidate("32", "Vehicle Technican", "Divorced");
var Monika = new candidate("45", "HR Admin", "Married");
function  myFunction() {
    document.getElementById("potencial_candidate").innerHTML =
    "Kasia is  " + Kasia.candidate_age + "years old. She is " + Kasia.candidate_occupation + " and She is a " + Kasia.candidate_relationship + " but She dating with collegue from work." }

    //nested
function count_function() {
    document.getElementById ("counting").innerHTML = count() ; 
function count (){
            var first_person = 1; 
            function one_more() { first_person += 1; }
                one_more() ;
                return first_person ;
                }
            }