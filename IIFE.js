//Immediately Invoked function Expression.(IIFE)

function myNum(){
    console.log(`Connection establised!!`);
}
myNum();

(function myNum(){
    console.log(`Connection establised!! with IIFE`);//Here in first bracket we initialized the function and next brac to call them.
})();                    //Here semicolon is must to stop the execution explicitly.

//We use to remove the global scope pollution we use IIFE.

((name)=>{
    console.log(`DB conected TWO ${name}`);           //HERE we have used the arrow function.
})("Deepak");
