//declaration and initialisation 
let a =10;    //number
console.log(a)   //this is similar to printf in c and System.out.println in java 
let username='Enter full name';  //strings
console.log("username is:", username )
let firstname="Phani"
console.log("firstname is:",firstname)
let lastname="Madhuri"
console.log("lastname is:",lastname)
let status=true   ///boolean
console.log(status)
let marks=[90,80,70,"hello",true,2.34];   //arrays
console.log(marks)
let person={
    pid:100,
    pname:'phani'
}  //object 
 console.log(person)
let x=11;
let y=12;
let z=13;
console.log("a is ",x , "b is ",y , " and c is ",z)
// console.log(a is ${x}  b is ${y} and c is ${z} )   can also be written like this 
let p;
p=101;
console.log(p)
console.log( typeof p) //typeof defines the datatype of the variable 
p="HELLO"
console.log(p)
console.log( typeof p)
p=true
console.log(p)
console.log( typeof p)
p=[1,2,3,4,5]
console.log(p)
console.log( typeof p)
p={}
console.log(p)
console.log( typeof p)

let q=123
console.log(q)
console.log( typeof q)
let w="123"//string
console.log(w)
console.log( typeof w)
let l=100;
let k="100"
console.log(l==k)//=== is strict equal which chesks data types also 
//if:
/* if(condition){
} 
if else and if else if*/
let mmarks=[1,2,3,4,5]
for(let index=0;index<mmarks.length;index++)
{
    console.log(mmarks[index])
}

let u=100
u=123
u=355

const h=12
h=13
h=14