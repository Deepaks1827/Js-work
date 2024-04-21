//Object literals
const user={
    name : "Deepak",
    loggedIn : true,
    age:35,
    getUserDetails:function(){
        console.log("Got user details");
        console.log(`name: ${this.name}`);
        console.log(this);
    }
}
console.log(user.name);
console.log(user.getUserDetails());
console.log(this);    //Here it will give an empty parenthesis but in browser it will give the Window Object.

function User(name,age,loggedIn){
    this.name = name
    this.age = age
    this.loggedIn = loggedIn
    this.Greeting = function(){
        console.log(`Welcome: ${this.name}`);
    }
    return this

}
const userOne = new User("Deepak",26,true); //After putting new keyword we will get the different instances
const userTwo = new User("Shukla",25,false);
// console.log(userOne);
// console.log(userTwo);
//After using new keyword
//   Step1 => Empty Object Created.
//   Step2 => constructer function will be called.this pack the argument 
//   Step3 => Argument Injected inside this.
//   Step4 => We get it in function.
console.log(userOne.constructor);

