// ASSIGNMENT 5: 
// Bank Transaction Analyzer
// You are building a bank statement summary.
// Test data:
// const transactions = [
//   { id: 1, type: "credit", amount: 5000 },
//   { id: 2, type: "debit", amount: 2000 },
//   { id: 3, type: "credit", amount: 10000 },
//   { id: 4, type: "debit", amount: 3000 }
// ];
// Tasks:
//     1. filter() all credit transactions
//     2. map() to extract only transaction amounts
//     3. reduce() to calculate final account balance
//     4. find() the first debit transaction
//     // 5. findIndex() of transaction with amount 10000

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
//1
let t1=transactions.filter(transactions=>transactions.type==="credit");
console.log(t1)
//2
let t2=transactions.map(transactions=>transactions.amount)
console.log(t2)
//3
let t3=transactions.reduce((acc,element)=>
{
    if(transactions.type==="credit")
{
    return acc+transactions.amount;
}
    else{
        return acc-transactions.amount
    }
})
console.log(t3)
//4
let t4=transactions.find(transactions=>transactions.type==="debit")
console.log(t4)
//5
let t5=transactions.findIndex(transactions=>transactions.amount===100000);
console.log(t5)