//synchronous 
    console.log("first")
for(let i=0;i<1000000000;i++){}
    console.log('Second')
    console.log("third")
//in this synchronous is the first will execute and second will execute only after first is printed and it takes time to print second and third based on the value we will in for loop 

//asynchrous
console.log('first')
setTimeout(() => {   //setTimeout is called as asynchronous function 
    console.log("task completed")
},7000);
console.log("second")
console.log("third")
//here the output will be the first will print first then after 7 seconds of delay second and third will print 
//benifit is it didnt block the ctrl like synchronous does it called the second and third immediately after 7 seconds 


//timer function 
setTimeout(()=>{
console.log("Callback execution")
},3000);   
console        //call back is called after 3 sec 
 //example the message of otp will expire in 30 seconds it is done by this setTimout.This setTimeout is a asynchronous function 

 //set interval 
 setInterval(()=>{
    console.log("Timer called")
 },1000)
 //can call callback func repeatedly after 1 sec

//  //Promise
//  console.log("Friend is waiting for a call in 5 sec")
//  let futureCondition=true;


//  //promise producer(create promise)
//  const promiseObj=new Promise((fulfilled,rejected)=>{
//     fulfilled("promise fullfilled")
//     setTimeout(() => {
//         if(futureCondition===true)
//         {
//             fulfilled("Hello frnd how are you..")
//         }
//         else{
//             rejected("Busy..Call you later")
//         }
//     }, 5000);
//  })
//  //promise consume
// //then method fullfilled or called directly when the promise is fullfilled  , cathc can be fullfileld or called whne the promise is rejected 
// promiseObj
// .then(()=>{})
// .catch(()=>{})

