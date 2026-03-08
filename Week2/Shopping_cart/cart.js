import e from 'express';
import { getProductById, checkStock } from './product.js';
let cartItems = [];
export function addToCart(productId, quantity) {
     // 1. Get product details
      const product = getProductById(productId)
     //   2. Check stock availability 
     if(!product){
  return "Product not found"
     }
     else{
        return "product not found"
     }
     // 3.Check if product already in cart
     //- If yes, update quantity 
     // - If no, add new item 

 if(!checkStock(productId, quantity))
  return "Not enough stock"
 const existing=cartItems.find(item=>item.productId===productId)
 if(existing)
 {
  existing.quantity+= quantity
  return "Cart quantity updated"
 }
 cartItems.push({productId,quantity})
}
     // 4. Return success/error message 
export function removeFromCart(productId) 
{
    // Remove product from cart 
    cartItems = cartItems.filter(item => item.productId !== productId)
 return "Item removed"
}

export function updateQuantity(productId, newQuantity) {
 if(!checkStock(productId, quantity))
  return "Not enough stock"
 const existing = cartItems.find(item => item.productId === productId)
 if(existing)
 {
  existing.quantity += quantity
  return "Cart quantity updated"
 }
 cartItems.push({ productId, quantity })
    }

export function updateQuantity(productId, newQuantity) { 
    // Update quantity of product in cart // Check stock before updating 
if(!checkStock(productId,newQuantity))
  return "Stock not available"
 const item = cartItems.find(i=>i.productId===productId)
 if(item)
 {
  item.quantity =newQuantity
  return "Quantity updated"
 }
 return "Item not in cart"
}

export function getCartItems() { 
    // Return all cart items with product details 
     return cartItems.map(item => {
  const product = getProductById(item.productId)
  return {
   name: product.name,
   price: product.price,
   quantity: item.quantity
  }
 })
    }

export function getCartTotal()
 { 
    // Calculate total price of all items in cart // Return total
 function getCartTotal() {
 let total = 0
 cartItems.forEach(item => {
  const product = getProductById(item.productId)
  total += product.price * item.quantity
 })
 return total
}
}

export function clearCart() 
{ 
    // Empty the cart 
 cartItems = []
    }
