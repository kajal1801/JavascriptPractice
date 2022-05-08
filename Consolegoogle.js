var quest1 = prompt("What is your age?");
var quest2 = prompt("What is your favourite colour?");

console.log("You are "+quest1 +" years old");
console.log("Your favourite colour is "+quest2);

console.log("Hello! Welcome to the store");
console.log("We offer coffee for 2$ each and cookies for 1$ each");
var quest1 = prompt("How many coffee cups would you like?");
var quest2 = prompt("How many cookies would you like?");
var quest3 = prompt("How much would you like to leave as tip?");

quest1 = parseInt(quest1);
quest2 = parseInt(quest2);
quest3 = parseInt(quest3);

c1 = 2*quest1;
c2 = 1*quest2;

var taxes = (c1+c2)*0.1;
var total = c1 + c2 + taxes;

console.log("You have ordered " + quest1 + " coffees for a total of "+c1+" $");
console.log("You have also ordered "+ quest2 +" cookies for a total of "+c2+" $");
console.log("You have left "+quest3 +" $ as a tip. The total of your bill is "+total+" $ with taxes ");