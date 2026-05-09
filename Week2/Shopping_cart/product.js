// i. product.js - Product catalog // Product database (simulated)
 const products = [ 
{ id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' }, 
{ id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' }, 
{ id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
 { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' }, 
{ id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' } 
];
export function getProductById(id) { 
    // Find and return product by ID 
    function getProductById(id) {
 return products.find(p=>p.id===id)
}
    }

export function getAllProducts() {
         // Return all products
 function getAllProducts() {
 return products
}
 }

export function getProductsByCategory(category)
 { // Filter products by category
    function getProductsByCategory(category) {
 return products.filter(p=>p.category===category)
}
 }

 export function searchProducts(query)
  { // Search products by name (case-insensitive) 
    function searchProducts(query) {
 return products.filter(p=>p.name.toLowerCase().includes(query.toLowerCase())
 )
}
}
export function checkStock(productId, quantity) {
     // export function checkStock(productId, quantity) {

 const product = getProductById(productId)
 if(product.stock >= quantity){
  return true
 }
else{
 return false
}
}
export function reduceStock(productId, quantity) {
     // Reduce product stock after purchase 
 function reduceStock(productId, quantity){
 const product=getProductById(productId)
 product.stock=product.stock-quantity
}
}
