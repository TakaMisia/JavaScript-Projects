//tenary
function aqua_function() {
    var height, access;
    height = document.getElementById ("Height").value ; 
    access = (height<160) ? "You are too short" : "You are tall enough" ;
    document.getElementById ("access").innerHTML = access + "inside." ; 
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
    document.getElementById ("Counting").innerHTML= count(1); 
function count (){
            var first_person= 1; 
            function one_more() { first_person += 1; }
                one_more() ;
                return first_person ;
                }
            }