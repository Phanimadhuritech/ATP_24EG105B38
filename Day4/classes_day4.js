//class
   //object iterals    //reference is stored in stack and object is in heap
  const test={
    a:10,     //without a classs we can create objects 
    //getData:function(){}
  }

//   let person={}
//   let student={}
//   let car={}
//   let college={}

  //create 20 student objects 
//   let student1={
//     sno:"1",name:'arun'
// }let student2={
// sno:"2",name:'amal'}   this will be lenghty so we sue classes properties 


//create class
class student{
    //properties
    #sno;    //# is the private variable makes it the private variable 
    name;
    email;     //if values not given it is invalid value 

    //constructor
    constructor(sno,name,email){     //name of the constructor is constructore itself 
          //initialise obj
        this.sno=sno 
        this.name=name;
        this.email=email;
    }
    //methods
    getStudentData(){
        return this.name;
        return this.sno;
        return this.email;
    }
}

//create objs
let std1 = new student(1,'phani','phani@gmail.com')     //calling classs means calling constructor method
let std2 = new student(2,'keerti','keerti@gmail.com')
console.log(std1.name,std1.sno,std1.email)
console.log(std2.name,std2.sno,std2.email)

//employee class
class employee{
    //priate members
    #eno;
    #name;

    //constructor
    constructor(eno,name){
        this.#eno=eno;
        this.#name=name;
    }
    getData(){
        console.log('eno is',this.#eno,'and name is',this.#name)
          
    }
    //static method 
  static testMethod(){}   
}

//student is a person 
/*class person(){}
class student extends person{} 
this is an is-an relationship which is called as inheritance 
 
'car has a engine' - this is called as has a relationship  which is called as composition 
class engine{}
class car{
engine e;
}
*/

//nullish coelising 

//spread operator(create copies of arrays and objects)

// let x=100;
// //create copy
// let y=x;
// //we can create copies only for primitive not for not primitive , 
// let obj={a:100};
// let copyObj=obj;
// obj.a=123;     //expected output; original is a:123
// console.log(copyObj)  
// console.log(obj)        //eo; copy is a:100

//create  copy using spread operator thi is used for shallow copy 
let originalObj={a:10}
let copyObj={...originalObj} //... is called as spread operator copy of object is created 
    //change originalObj
    originalObj.a=123 
    console.log(originalObj)  
    console.log(copyObj)


let originalArr=[1,2,3]
let copyArray={...originalArr}
originalArr.push(4,5,6)
console.log(originalArr)
console.log(copyArray)
//--------------------------------------------------
//a deep copy can be created by structuredclone 
//deep cpoy
let person={
    name:'ravi',
    address : {
        city:'hyd',
        pincode:3743942
    }
//deep copy as it is nested class and structuredclone is used here
}
let copyPerson={...person}
let copyPerson1=structuredClone(person)
person.city='mumbai'
person.name='phani'
console.log(person)
console.log(copyPerson)
//-----------------------------------------------------------------------
//add elements/properties while copying 

let arr=[1,2,3]
let cpar=[...arr,10]
console.log(arr)
console.log(cpar)

let o={a:10}
let copyO={...o,b:10}
//merge
let ar1=[10,20]
let ar2=[30,40]


//rest parameter
//when spread operator is added before a parameter it is called as rest parameter 
function findSum(b,...a)   //we should not write anything after the rest parameter 
{                    //if the parameter is 1 and the values are more than 1 argument or value then it will ignore but does not give an error 
    console.log(a);
}
findSum(10,20,70,49)

//write a function that receives any number of arguments and find the sum 
function sum(...x){
    let sum=0;
    for (let i of x)
        sum=sum+i; 
    return sum;
    }
console.log(sum(1,2,3,4,5))

      //2nd method
      const findSumm=(...numbers)=>{
       return numbers.reduce((sum,el)=>sum+el)
      } 
      let result=findSumm(1,2,3)
      console.log(result)

//destructing(unpackcing)
//this allowes us to take array of variables without taking variables unnecesarly 
let arr1=[1,2,3]     //unpacking of an array 
let [a,b,c]=arr1;
console.log(a,b,c)


//unpacking of an object for this the variables hould have 
let emp={
    eid:1,
    company:'TCS',
    address:{
        city:'hyd'
    }
}
let{eid,company,address:{city}}=emp;   //here these are the variables eid,company,address
console.log(eid,company,city)