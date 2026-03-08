/* array
 [ordered collection]*/
let marks=[90,80,70,60] //can call as array of numbers as each number is element 
let names=['phani','madhuri','madhu']  //marks and names are reference variables of array not a part of array 
console.log(marks[10])   //it returns undefined when the element is not there 
console.log(names[0])
/* to access each and every element we can iterate the array. it is better to stop using 'for' loop for iteration 
Instead start using 'for-of' loop
for iterating an array we use 'for-of' loop*/
for(let v of marks) //it iterates all the elements in the array but it is not applicable for index level access
{
    console.log(v)
}

//for index level and element level access we use 'for-each' loop

/*Object
 ( is an unordred collection)*/
let student={  //student is the reference to the object not the name of the object 
    sno:101,
    name:'Phani',
    age:19,
    course:"B.Tech"
}
console.log(student)
console.log(student.sno) //since student is reference name we will take it as ref var and choose the one we want 
console.log(student['sno']) //another way for 1 value 

// for iterating an object we use 'for-in' loop

for(let v in student)
{
    console.log(v) //this gives only keys i.e sno,name,age,course not the values 
    console.log(student[v]) //gives key and values bothe i.e sno 101
    console.log('v is',student[v])
}


//Array of objects
let emps=[
    {eno:1,name:"Phani"},
    {eno:2,name:"Madhuri"},
    {eno:3,name:"Vadlamani"},
];
console.log(emps)

// q1) iterate the emps array and print eno and name of each emp 
for(let x of emps){
    console.log('eno is',x.eno,'name is',x.name) //
}
//complex objects 
let student1={
    rollNo:1,
    firstName:'Phani',
    lastName:'Madhuri',
    marks:[90,80,70,60],
    address:{                             //this is called as nested objects object in an object 
        city:'hyderabad',
        pincode:234567,
    },
    getFullName: function()
    {                                     //called as member functions or simply members of the object
    return this.firstName+this.lastName   //this represents the current object 
    },
    averageMarks: function()
    {
        // q2) find and return avg marks
        let total=0
        for(let i=0;i<this.marks.length;i++)
        {
             total+=this.marks[i]
        }
        let avg=total/this.marks.length
        return avg
    },
};
console.log(student1.getFullName())
console.log(student1.averageMarks())

/*basic operations on array */
 let testArray=[10,20,30]

//Dynamic insertion 
     //start 
       testArray.push(40)     //inserts an element at the end of an array 
       console.log(testArray)
    //end 
       testArray.unshift(9)    //the unshift  will insert at the beginning of an array 
       console.log(testArray)
    //in between(index based insertion)
       testArray.splice(2,0,123)    // splics removes and element and adds the element if we want  
       console.log(testArray)

//Dynamic deletion
     //start
       let removedElement=testArray.shift()   //deletes the first elemenet in an array     
       console.log(testArray)
    //end 
       testArray.pop()      //deletes the last element in an array 
       console.log(testArray)
    //in between(index based)
       testArray.splice(2,1)
       console.log(testArray)

//Dynamic updation
    testArray.splice(2,1,23)
    console.log(testArray)

//day3
//basic operation on object 
//read properties
let person={        //key values pairs reference is stored in stack , person is the reference object 
    name:'Ram',
    age:25
}
//iterate object
//add a new property
person.city='hyd'  //new prop city is updated 
//update a new property
person.name='phaniii' //here the name is replaced with new name if the key is already there it is in update operation else it is in insertion operator 
//delete a new property 
delete person.age
console.log(person) 


