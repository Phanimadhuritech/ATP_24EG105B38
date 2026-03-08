// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

//1
const temperatures = [32, 35, 28, 40, 38, 30, 42];
let t=temperatures.filter((Elements)=>Elements>35)
console.log(t)
//2
let t1=temperatures.map(elements=>(elements*1.8)+32)
console.log(t1)
//3
const avg=temperatures.reduce((accumulator,elements)=>accumulator+elements)
console.log(avg/7)
//4
const t2=temperatures.find(elements=>elements>40)
console.log(t2)
//5
const t3=temperatures.findIndex(elements=>elements===28)
console.log(t3)

