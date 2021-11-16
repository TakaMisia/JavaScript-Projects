//while loop
function loop_1() {
    var Z = "" ;
    var Y = 1 ;
    while  (Y < 51 ) {
Z += "<br>" + Y ; 
Y++;
 }
 document.getElementById("loop_1").innerHTML = Z;
}

//for loop
var  storage = ["tomato " , "salate " , "onion " , "pepers " , "aspaagus "] ;
var content = "" ; 
var Y ;
function for_loop() {
for (Y = 0; Y < storage.length; Y++) {
  content += storage[Y] ;
}
  document.getElementById("for_loop").innerHTML = content;
}
//arrays
function my_daughter() {
   var  baby_moments = [] ; 
   baby_moments [0] = " smile";
   baby_moments [1]= "cry";
   baby_moments[2]= "fun";
   baby_moments [3]= "first walk";
   baby_moments[4]= "firs teeth";
   baby_moments [5]= "primary school";
document.getElementById ("daughter").innerHTML = "You will see moments of my daughter life which we pass:" + baby_moments[0] ;
}
//constant
function constant() {
  let telephone = {type : "phone", brand:"Samsung", model: "S20", color:"blue" };
  telephone.color = "black" ;
  telephone.price = "1200$" ; 
  document.getElementById ("constant").innerHTML = "New" + telephone.type +  "cost" + telephone.price + "we talking about" + telephone.brand + telephone.model + "-it is good price."
}
//object with let 
function dog () {
  let  Animal = {
      Species: "Dog",
      Color: "brown",
      Breed: "Husky",
      Age: 1,
      Sound: "waw waw!",
      return : "This is my favvorite breed : " + this.Color + this.Breed ,
  }
  } ;


