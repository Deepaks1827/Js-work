//Functions
function myName (){                               //Initialization of the function.
    console.log("Hello world!!");                  
}
// myName();                                           //Calling of that function.


function addTwoNum(num1,num2){
   console.log( num1+num2);
}
// addTwoNum(3,7);                                    //Here it will do the proper result 

let result = addTwoNum(10,20)            //Here it will return undefined because we are not returning anything in function.

function addTwoNumber(num1,num2){
    let result1=( num1+num2);
    return result1     
    console.log("nothing");                          //After return there is nothing to print.           
    //or  we can directly return
    return num1+num2                    
 }
//  addTwoNumber(3,7);  
//  let finalresult = addTwoNumber(20,80);          //Now it will have value 
 
function example (username){
  console.log(`${username} just logged in`);
}
// example("pappu");
// example();                                          //Here it will return as undefined.

function priceReturn(...num1){                    // (...) is the rest operator which will return the values as Array.
return num1
}
console.log(priceReturn(100,500,600,30));           
//Object handling in function.
let datas = {
    name:"Deepak",
    age:26
}
function handleObject(anyObject){
    console.log(`name is ${anyObject.name} and age is ${anyObject.age}`);
}
handleObject(datas);                     //we can also provide objects as argument.
handleObject({
    name:"Shukla",
    age:21
})

const myNewArray = [100,200,300,400]
function returnSecondValue(newArr){
    return newArr[1]

}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([2000,5000,90000,40]));

