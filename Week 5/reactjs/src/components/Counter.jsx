import { useState } from "react";

function Counter(){
    const[count,setCount]=useState(0) //state , function to modify state
    //state

    //functions to modify the state
    const increment =()=>{
        setCount(count+1);
        // count=count+1;
        // console.log(count)
    };
    const decrement =()=>{
        setCount(count-1)
        // count=count-1;
        // console.log(count)
};
}
// console.log("counter component")