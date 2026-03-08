//1)functions 
function test()
{
    return 100
    
}
console.log(test())  //to know what value we r returning 
let result=test()

//2) function expressions
let test1=function()
{
    return [1,2,3,4,5]
}
let result1=test1()
console.log(result1)

//3) func 2
let test2=function()
{
    return function(){
        return "hello"
        return [1,2,3,4,5]
    
    }
}
let result2=test2()
console.log(result2()) //function() { return 100}


//4) create game 
let createGame=function(level1,nameOfPlayer)
{
    console.log('hello',nameOfPlayer, 'You are at level' ,level1)
}
createGame(1,'ravi')
createGame(2,'ramu')

//5) create game 2
//function with reusable feature to create multiple levels of the game 
let createGame2=function(nameOfPlayer){
      return function(level1)
{
    console.log('hello' ,nameOfPlayer,'You are at level',level1)
}
}
let createlevel=createGame2('ravi')
createlevel(1)
createlevel(2)
createlevel(3)

//6) create game 3
let createGame3=function(level2,nameOfPlayer)
{
    console.log('Hello',nameOfPlayer,'You are at level',level2)
}


//7) function can recieve another function of the argument 
let test3=function(a)
{
    console.log(a)
}
test3(1)
test3('hello')
test3([1,2,3])
test3(function(){  //a function can pass arg to another func
    console.log('hi')
})


//8) payment using functional programming
let makePayment=function(amount,paymentType) //makePayment func is main func  //parameters fall under function scope
{
    console.log("Payment of",amount,"started")
       paymentType()

}
let UPIPayment=function(){ //upi function is a call back function as it passes arguments to other functions ie makePayment 
      console.log("UPI Payment done")
}
let cardPayment=function(){   //cardPayment is call back func
   console.log("Card payment done")
}
makePayment(2000,UPIPayment)
makePayment(50000,cardPayment)


//global scope is the variable is unitl the function is executed

let a=100;   //global scope
function test()
{
    let b=200;  //function scope
    if(true)
    {
        let c=300;  //block scope: has shorter lifetime 
    }
}

//9) example
/* closure it means the outside scope var will be removed once execution is done ,but the var will be available it will be temporarily stored in heap 
clouser will b possible only when a function returns another function */
let sum=function(x)   // this is a function scope which executes and removes the value 
{
    return function(y)  // this is x function
    {
        return x+y //this is y function 
    }
}
let x=sum(100) //it returns the function 
console.log(x(200))  //should get x is not defined 
