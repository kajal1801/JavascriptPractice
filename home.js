// console.log('hello');
// alert('hii');

// Writing single line comment

//variables
// var b = 'smoothie';
// console.log(b);

// var someNumber = 10;
// console.log(someNumber);

// document.getElementById('someText').innerHTML = 'Hello World';
// var age = prompt('What is your age?');
// console.log(age);

// Numbers
// var num1 = 7;
// var num2 = 20.9;

// var num3 = num1 * num2;
// console.log(num3);

/*Functions
1. Create a function
2. Call the function
*/

// function fun() {
//     console.log('this is a function');
// }

// fun();

/*
Let's create a function that takes in a name and prints out a greeting
*/

// function greeting(){
//     var name = prompt('What is your name?');
//     var result = 'Hello ' + name;
//     console.log(result);
// }

// greeting();

// How do arguments work in functions?
// HOw do we add two numbers together in a function

// function sumNumbers(num1, num2, num3, num4, num5){
//     var result = num1 + num2 + num3 +num4 + num5;
//     console.log(result);
// }

// sumNumbers(34, 45, 'Kajal', 67, 89);

//while loop
// var num = 0;
// while(num<10){
//     num+=1;
//     console.log(num);
// }

// //for loop
// for (let a=0;a<=10;a++){
//     console.log(a);
// }

//Data types
// number = 18
// let name = {first: 'Kajal', last: 'Jaiswal'}; //object
// let truth = false; //boolean
// let groceries = ['banana', 'orange', 'apple']; //array
// let random; //undefined
// let nothing = null; //null

//Strings in JS (common methods)
// let fruit = 'banana,apple,orange,blackberry';
// let morefruit = 'banana\napple';

// console.log(fruit.length);
// console.log(fruit.indexOf('a'));
// console.log(fruit.slice(2,6));
// console.log(fruit.replace('ban', '123'));
// console.log(fruit.toUpperCase());
// console.log(fruit.toLowerCase());
// console.log(fruit.charAt(2));
// console.log(fruit[2]);
// console.log(fruit.split(','));
// console.log(fruit.split(''));

//Arrays

// let fruits = ['banana', 'apple', 'orange', 'blackberry'];
// fruits = new Array('banana', 'apple', 'orange', 'blackberry');

// console.log(fruits[2]);
// fruits[0] = 'pear';
// console.log(fruits);

//  for(let i = 0;i<fruits.length;i++){
//      console.log(fruits[i]);
//  }

//  console.log('to string', fruits.toString());

//  console.log(fruits.join(' - '));
//  console.log(fruits.pop(),fruits);
// console.log(fruits.push('blackberries'),fruits);

// fruits.shift();
// console.log(fruits);
// fruits.unshift('kiwi');
// console.log(fruits);

// let vegetables = ['asparagus', 'tomato', 'broccoli'];
// let allGroceries = fruits.concat(vegetables);
// console.log(allGroceries);
// console.log(allGroceries.slice(1,4));
// console.log(allGroceries.reverse());

// let someNumber = [5, 10, 2, 24, 3, 7, 5, 2, 255, 45, 4 , 3, 2, 1, 0];
// console.log(someNumber.sort(function(a, b){return a-b}));
// console.log(someNumber.sort(function(a, b){return b-a}));

// let emptyArray = new Array();
// for(let n = 0;n < 10;n++){
//     emptyArray.push(n);
// }
// console.log(emptyArray);

// let a = 6;

// (a == 5) ? console.log('a is 5') : console.log('a is not 5');

let user;
user = "";
console.log(user);