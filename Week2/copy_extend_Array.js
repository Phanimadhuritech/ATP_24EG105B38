// Exercise 1: Copy & Extend an Array
// You are given:
//let fruits = ["apple", "banana"];
//Tasks
//-> Create a new array moreFruits
// -> Copy all fruits from fruits
                              
//-> Add "orange" at the end using spread                            
//-> Print both arrays
let fruits = ["apple", "banana"];
let newfruits=[...fruits,'orange'];
//fruits.push('cherry')
newfruits.push('orange')
console.log(fruits)
console.log(newfruits)
