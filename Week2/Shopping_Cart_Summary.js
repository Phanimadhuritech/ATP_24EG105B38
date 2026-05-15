// ASSIGNMENT 1:
// You are building a shopping cart summary for an e-commerce website.
// Test Data : 
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];
// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
//1
let c=cart.filter(products=>products.inStock)
console.log(c)
//2
let c1=cart.map(products=>({name:products.name, totalPrice:products.price*products.quantity}))
console.log(c1)
//3
let c2=cart.reduce((acc,element)=>acc+element.price*element.quantity)
console.log(c2)
//let c3=cart.find(products=>({id:products.id=102,name:products.name="Mouse",price:products.price=800,quantity:products.quantity=2,inStock:products.inStock=true }))
//console.log(c3)
let c3=cart.find(products=>products.name==='Mouse')
console.log(c3)
//5
let c4=cart.findIndex(products=>products.name==='Keyboard')
console.log(c4)
