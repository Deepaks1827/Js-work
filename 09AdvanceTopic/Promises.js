//Do an async task

//DB calls , cryptography, network calls.
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("resolve part completed");
});
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2  is completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("task 2 is completed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Deepak", email: "deepak@gmail.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) { 
      resolve({ name: "Deepak Shukla", password: "1234" });
    } else {
      reject("ERROR:Something went wrong");
    }
  }, 1000);
});
promiseFour.then((user)=>{
    console.log(user);
    return user.name

}).then((name)=>{
console.log(name);
}).catch(function(error){
console.log(error);
}).finally(()=>{
    console.log("Finally to chalega hi");
})

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = true;
      if (!error) { 
        resolve({ name: "Shukla Deepak", password: "1234" });
      } else {
        reject("ERROR:Something went wrong");
      }
    }, 1000);
  });
  async function consumePromiseFive (){
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
 
  }
consumePromiseFive()

// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.org/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
   
// }
// getAllUser()

fetch('https://jsonplaceholder.org/users')
.then((response)=>{
    return response

}).then((data)=>{
return data
}).catch((error)=>{
    console.log(error);
})
