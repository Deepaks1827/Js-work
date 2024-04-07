const user = {
    username: "deepak",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);          //Here this refers to the context of  
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"                                //Here we have changed the value so this will refer to new value
// user.welcomeMessage()

// console.log(this);                      //it refers the global and there is nothing defined so it will return {}
                                           // only
// function chai(){
//     let username = "deepak"                       
//     console.log(this.username);              //this will not work inside only function
// }

// chai()

// const chai = function () {
//     let username = "deepak"                    //not work
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"                        //this keyword will return {}.
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {                           //Explicit ....we have to write array keyword.
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2                   //implicit no need to type return

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Deepak"});


console.log(addTwo(3, 4))




