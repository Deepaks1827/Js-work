//Objects 
// Through literals sngleton nahi banta hai .. through constructor banta hai.
//object literals.
const mySym = Symbol("Key11");

let obj1 = {
    name:"Deepak",
    lastname:"SHukla",
    [mySym]:"key12",             //The symbol is stored only in this way.
    age:19,
    isLoggedin:false,
    loggedInDay:["Monday","Tuesday"],
    "sex":"male"
}



// console.log(obj1.name);    //This is not the good way sex cant be accessed by this method
// console.log(obj1["age"]);   //The keys of objects are also stored as String thats why we can access it by this method.
// console.log(obj1[mySym]);   //This is the only way to access symbol.
// console.log(typeof(mySym));

// obj1.lastname = "Thakkar";
// Object.freeze(obj1);
// obj1.lastname= "Pandit"
// console.log(obj1);

// obj1.greeting = function(){
//     console.log("Hello my name is Deepak");
// }
// console.log(obj1.greeting);   //It is referencing at function but cant find scope.
// console.log(obj1.greeting());

// obj1.greeting2 = function(){
//     console.log(`My name is ${this.name}`);      //We use this to access the property of same function.
// }
// console.log(obj1.greeting2());


//Through constructor. (Singleton Object.)'

// const tinderUser = new Object();    //
const tinderUser = {}
tinderUser.id = 123;
tinderUser.name ="Deepak"
tinderUser.mail="deepak@gmail.com"
// console.log(tinderUser);


//Nested object----->
const regularUser = {
    email:"deepak@google.com",
    fullname:{
        firstname:"Deepak",
        lastname:"Shukla",
        middlename:{
            name:"kumar"
        }

    }
}
// console.log(regularUser.fullname.middlename.name);    //Accessed through chaining.

const obje1 ={1:"a",2:"b"}
const obje2 ={3:"a",4:"b"}
// const obje3 = Object.assign({},obje1,obje2);    //Here it took target and source.
// console.log(obje3);
const obje4 = {...obje1,...obje2}
console.log(obje4);

// console.log(obj1);
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));
// console.log(obj1.hasOwnProperty('age'));

const {lastname:ln} = obj1;    //Destructuring
console.log(ln);







