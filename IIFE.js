//Immediately Invoked function Expression.(IIFE)

function myNum(){
    console.log(`Connection establised!!`);
}
myNum();

(function myNum(){
    //Named IIFE
    console.log(`Connection establised!! with IIFE`);//Here in first bracket we initialized the function and next brac to call them.
})();                    //Here semicolon is must to stop the execution explicitly.

//We use to remove the global scope pollution we use IIFE.

((name)=>{
    console.log(`DB conected TWO ${name}`);           //HERE we have used the arrow function.
})("Deepak");

//Execution Context 
//1. Global Execution Context.
//2. Function Execution Context.
//3. Eval Execution Context.       // It may be used on connection with Db time .


//There are two type of phase 
// 1. Memory Creation Phase ==> In this only memory is allocated to variables .
// 2. Execution Phase ==> In this the execution is done.

let val1 =10;
let val2= 5;
function addNum (num1,num2){
    let total = num1+num2;
    return total;

}
let result1 =addNum(val1,val2)
let result2 =addNum(100,200)

// 1st phase is--> Global Execution which is allocated inside this.
// 2nd phase --> Memory Creation   val1 = undefined 
                                //    val2 = undefined
                                //     addNum=defination
                                //     result1 = undefined
                                //     result2=undefined
// 3rd phase--> Execution phase value will be assigned to the memory .
                                   //val1 = 10 
                                   //val2 = 5
                                   // addNum = Here another execution context will be created 
                                   //in which all the phase will be repeated.
//Call Stack work and work on LIFO .                                   