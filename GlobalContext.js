// sayHello();

// function sayHello(){
//     console.log('Hello');
// }

// This happened due to global context in js

if(2 == "2"){
    console.log("This is true")
}

/**
 * Function declarations are scanned and made available
 * Variable declarations are scanned and made undefined
 */

tipper(5);

function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}


var bigTipper = function(a){
    var bill = parseInt(a);
    console.log(bill + 15);
}

bigTipper("200");

console.log(name);
var name = "Kajal";

function sayName(){
    var name = "Mr. H";
    console.log(name);
}

sayName();

console.log(name);

