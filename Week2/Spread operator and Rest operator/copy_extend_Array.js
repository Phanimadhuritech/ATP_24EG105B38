// Exercise 1: Copy & Extend an Array
// You are given:
let fruits = ["apple", "banana"];
//Tasks
//-> Create a new array moreFruits
// -> Copy all fruits from fruits
let newfruits=[...fruits,'cherry'];
//fruits.push('cherry')
//-> Add "orange" at the end using spread
newfruits.push('orange')
// -> Print both arrays
console.log(fruits)
console.log(newfruits)
