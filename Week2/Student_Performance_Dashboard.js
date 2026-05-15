// ASSIGNMENT 2:
// Student Performance Dashboard
// You are working on a college result analysis system.
// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];
// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D
//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
//1
let s=students.filter(studentsObj=>studentsObj.marks>=40)
console.log(s)
//2
let s1=students.map(studentsObj=>
 {
  if(studentsObj.marks>=90){
    return 'A'
  }
  else if(studentsObj.marks>=75){
    return 'B'
  }
  else if(studentsObj.marks>=60){
    return 'C'
  }
  else{
  return'D'
  }
 })
 console.log(s1)
//3
const avg=students.reduce((accumulator,elements)=>accumulator+elements.marks,0)
console.log(avg/students.length)
//4
let s2=students.find(students=>students.marks==92)
console.log(s2)
//5
let s3=students.findIndex(students=>students.name==='Kiran')
console.log(s3)



// ASSIGNMENT 3:
// Employee Payroll Processor
// You are building a salary processing module in a company HR app.
// Test data:
// const employees = [
//   { id: 201, name: "Amit", salary: 45000, department: "IT" },
//   { id: 202, name: "Neha", salary: 60000, department: "HR" },
//   { id: 203, name: "Rahul", salary: 75000, department: "IT" },
//   { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
// ];
// Tasks:
//     1. filter() employees from IT department
//     2. map() to add:
//             netSalary = salary + 10% bonus
//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"


const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
//1
let e=employees.filter(employees=>employees.department==='IT')
console.log(e)
//2
let e1=employees.map(employees=>{
  return
  employees,(employees.salary*1.10);
});
console.log(e1)