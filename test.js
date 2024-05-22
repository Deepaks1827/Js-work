console.log("Deepak shukla");

//Basic Variables
const accountId = 123;                   //block scope , cant changed.
let accountEmail="deepak@gmail.com";      // block scope , can be changed.
var accountNumber = 23456;                   //global scope can be changed.
accountName ="Deepak";                           // no data type defined auto taken.

console.table([accountId,accountEmail,accountNumber,accountName]);

//Basic Datatypes

//number
//string
//bigint
//boolean  
//null         => object but an empty value
//undefined    => undefined  later can be defined.
//symbol        

//typeof tells the type of data.
console.log(typeof null);

//conversion in js

let score = 33;
console.log( score , typeof score);
let score1 = "33"   
let score3 = Number(score1);     // here we have done the conversion 
console.log(score3, typeof score3);
console.log(score1, typeof score1);

let score2 = "33a"
console.log(score2, typeof score2);
let score4 = Number(score2); 
console.log(score4, typeof score4);    //here it gives a not a number(NaN);

let score5 = true;
console.log(score5 , typeof score5);
// true => 1   
//false => 0
//"" => false
//"deepak" =>true 


//Operations.
console.log(3 + "a");
console.log("a" +3);
console.log("a " + 1 + 3);
console.log(5 + 8 +"a " + 1 + 7);
console.log(+true);
console.log(+"");
//3a a3 a 13 13a 17 1 0  Output of all the above operations.

//Comparison'
console.log("2">1);  //Here js converts string to the number
console.log(null > 0); //> and == works differently that comparison converts null to number
console.log(null == 0);
console.log(null >= 0);
//true false false true

//=== Strict comparison
console.log("2" === 2);
//false
                                     

