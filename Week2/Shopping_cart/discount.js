const coupons={
'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};
export function validateCoupon(couponCode, cartTotal, cartItems) { 
    // 1. Check if coupon exists 
    const coupon = coupons[code]
 if(!coupon)
  return {
valid:false, message:"Invalid coupon" 
}
    // // 2. Check minimum amount requirement 
    if(total < coupon.minAmount)
  return {
 valid:false, message:"Minimum amount not reached" 
}
    // // 3. Check category requirement (if any) 
return { valid:true, message:"Coupon applied" 
// Return { valid: true/false, message: '...' } 
}
}

export function applyDiscount(cartTotal, couponCode, cartItems) { 
    // 1. Validate coupon 
     const coupon = coupons[code]
    // // 2. If valid, calculate discount 
    if(coupon.type === "percentage")
  return total * coupon.value / 100
    // // 3. Return final amount and discount details 
    if(coupon.type === "flat")
  return coupon.value
    // // Return { // originalTotal: ..., // discount: ..., // finalTotal: ..., // message: '...' // }
     return 0
 }
