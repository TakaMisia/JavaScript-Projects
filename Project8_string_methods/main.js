//concat method
function concat_method() {
    var part_1 = "Victoria have" ;
    var part_2= " 10 weeks " ;
    var part_3= " today, time " ;
    var part_4= "run to fast. " ;
    var  whole_method =  part_1.concat(part_2, part_3, part_4) ; 
    document.getElementById("concatmethod").innerHTML = whole_method;
}
//slice method
function slice_method() {
    var sentence = "i am happy to Mommy.";
    var section = sentence.slice (14, 20) ;
    document.getElementById("slice").innerHTML = section ; 
}
//upper method 
function upper_method() {
let text = "i work hard.";
let result = text.toUpperCase();
document.getElementById("upper").innerHTML = result;
}
//search method
function search_method () {
let text = "Victoria have a pretty eyes."; 
document.getElementById("search").innerHTML = text.search("pretty");
}
//number method 
function number_method () {
   var res = 23;
    document.getElementById("number").innerHTML = res.toString();
    }
//prcision method
    function precision_method () {
        var res = 235.76875765457;
         document.getElementById("precision").innerHTML = res.toPrecision(3);
         }
//fixed method 
         function fixed_method () {
            let res = 235.76875765457;
            let x = res.toFixed(3)
             document.getElementById("fixed").innerHTML = x;
             }
 //valueof method
 function value_method () {
    let str = "this is my value."
     document.getElementById("value").innerHTML = str.valueOf();
     }