//Data types
//1 => Primitive --- String, Boolean, bigInt, Integer,null , undefined, Symbol.
let id = Symbol("Deepak");
let id1 = Symbol("Deepak");
console.log(id===id1);   //false.

let userEmail;   // here undefined value will be stored.
const a1 = null;

//2 => Non Primitive(Reference type) 
//Array , Objects , Functions.
let arr1 = [3,5,7];
let onj1={
    name:"Deepakji",
    age:25
}
const func =()=>{
                              //Arrow function
}
const func1 =function (){
 console.log("Hello World");
}

func1();


//*************************** */
//Stack =>(Primitive)       Here we get only the copy of the memory 
//Heap =>(Non Primitive).    Here we directly receive the reference of the memory means we directly change the value. 


let myName = "Deepak";
let myName1 = myName;
myName1= "Jagdeesh";

console.log(myName);      //Deepak
console.log(myName1);      //Jagdeesh

let obj1 ={
    name:"Deepak",
    age:26
}

let obj2 = obj1
obj2.name = "Shukla";        //Here both are referencing to the same memory thats why value is same .using spread op we can overcome this.
console.log(obj1.name);    //Shukla.
console.log(obj2.name);     //Shukla.
