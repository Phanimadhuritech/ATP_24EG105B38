//advanced operations in a array
let testData=[90,45,-12,65,73]

//filter
     //get elements greater than 30

  //without filter
  let result=[]
  for(let element of testData)
  {
  if(element>30)
    result.push(element)
  }
  console.log(result)
//-------------------------------------------------------------------------------------------------------------------------

  //with filter()
//   let a =testData.filter(element)
//   {
//     return element>30
//   }
//   console.log(a)
  //using arrow method 
  let r1 =testData.filter((element)=>element>30)   //arrow by default contains return keyword
  console.log(r1);

  //q1) get elements between 40 and 80


  let r2 =testData.filter((element) => element>40 && element<80)
  console.log(r2)

//map() 
  //map modiifes 

  //add 10 for each element
  let r3=testData.map(element=>element+10) 
  console.log(r3)
   //add 10 for elements <50 and sub 20 from elements >50
  const r4=testData.map(element =>
  {
    if(element<50){
        return element+10
  }
  else if(element>50)
  {
    return element-20
  }
})
console.log(r4)

//reduce
   //find sum of elements of an array 
   //with reduce 
   let sum= testData.reduce((accumulator,element)=>accumulator+element)
   // the iteration steps of accumulator and element 
   //                         90         45            135
   //                         135        -12          123
   //                         123         65          188
   //                         188         73           261
   //                         261    no element so the final answer is 261
   
   console.log(sum)
  //q2) find small number
  let small = testData.reduce((accumulator,element)=>{
   if(accumulator>element)
     accumulator=element
    return accumulator
  })
    console.log(small)
   let big = testData.reduce((accumulator,element)=>{
     if(accumulator<element)
        accumulator=element
    return accumulator
   })
   console.log(big)

   //another way to find small
   let min=testData.reduce((acc,element)=>acc>element?acc:element)

//find()
let el=testData.find(element=>element==50)  //50 not there so undefined 
console.log(el)

//findIndex()
  let el1=testData.findIndex(element=>element===25)
  console.log(el1)

//sort
  let data=[9,10,8,4]
  let newArray=data.sort()//sorting is not possible as there is no lexical comparision 
  console.log("new array is ",newArray)

//sort2
  let data1=[9,10,8,4]
  let newArray1=data.sort((a,b)=>b-a)   //without these ,b it gives lexical comparision
  console.log("new array is",newArray1)
  console.log("data is",data1)

// array of objects using filter
  const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Lavanya", marks: 92 },
  { id: 3, name: "Aadya", marks: 35 },
  { id: 4, name: "Phani", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
  let results=students.filter(studentObj=>studentObj.marks>80)
  console.log(result)

  //reduce function find the sum of marks of all students 
  let sumOfMarks=students.reduce((acc,stdtObj)=>acc+stdtObj.marks,0)
  console.log(sumOfMarks)
  

  //map func for array of objs 
  let data2=students.map(stdObj=>stdObj.name)
  console.log(data2)


//-----------------------------------------------------------------------------------------------------------------------------------

  //error handling
    //creating new errors
    const err=new Error("This is the 1st error")
    console.log(err.name)
    console.log(err.message)
    console.log(err.stack)    //these are the ways we can create errors 
    //handling errors 
     console.log("first")
     try{
      console.log(a);
     }
     catch(err){
      console.log(err.message)
     }
     console.log("second");
     console.log('third');
     //error handling is done by try and catch and sometimes we use finally
     //finally(){}
//----------------------------------------------------------------------------------------------------------------------------------------------

