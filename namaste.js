
getName(); // This is called Hoisting
console.log(x);
var x = 7;

console.log(getName);

//normal function

function getName1(){
    console.log("Namaste JS1");
}

// arrow function
var getName2 = () => {
    console.log("Namaste JS2");
}

// Hoisting - Accessing a function before it is declared. 
// Arrow Funciton - It is not a function but it is a way to define a function.

var getName3 = function(){
    console.log("Namaste JS3");
}