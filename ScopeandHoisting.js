//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Deepak"

    function two(){
        const website = "Google"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Deepak Shukla"
    if (username === "Deepak Shukla") {
        const website = " Facebook"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))               //Here it will work
 
function addone(num){                   
    return num + 1
}



addTwo(5)                              //Here it will through the error this is hoisting.
const addTwo = function(num){
    return num + 2
}