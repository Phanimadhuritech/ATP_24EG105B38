//Promise
 console.log("Friend is waiting for a call in 5 sec")
 let futureCondition=true;


 //promise producer(create promise)
 const promiseObj=new Promise((fulfilled,rejected)=>{
    fulfilled("promise fullfilled")
    setTimeout(() => {
        if(futureCondition===false)
        {
            fulfilled("Hello frnd how are you..")
        }
        else{
            rejected("Busy..Call you later")
        }
    }, 5000);
 })
 //promise consumer
//then method fullfilled or called directly when the promise is fullfilled  , cathc can be fullfileld or called whne the promise is rejected 
promiseObj
.then((message)=>{console.log("Message in then:",message)})
.catch((errorMessage)=>{console.log("error is:",errorMessage)});
console.log("Hello")


//promise 2

  
