// Assignment 3: Student Marks List
// Scenario : You receive marks from an exam system.

// Test data:
// const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92

const marks = [78, 92, 35, 88, 40, 67];
//1
let m=marks.filter(elements=>elements>=40)
console.log(m)
//2
let m1=marks.map(elements=>elements+5)
console.log(m)
//3
let m2=marks.reduce((accumulator,elements)=>accumulator>elements?accumulator:elements)
console.log(m2)
//4
let m3=marks.find(elements=>elements<40)
console.log(m3)
//5
let m4=marks.findIndex(elements=>elements==92)
console.log(m4)
