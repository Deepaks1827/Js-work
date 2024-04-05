//Array..
const arr = [1,2,3,4,5];   // It took the direct reference to the memory it means we can directly change the value.
console.log(arr);
const myArr = new Array(3,5,8,9,0);
console.log(myArr[3]);

//Array Methods.
myArr.push(10);
console.log(myArr);  //push the value at the end
myArr.pop();         //pop the value from last
console.log(myArr);
myArr.unshift(20);   // put the value at the initial place
console.log(myArr);
myArr.shift();       // pull the first value.
console.log(myArr);
console.log(myArr.includes(10)); // will return boolean value if value not present there. 
console.log(myArr.indexOf(3));   //will return index 
const newArr = myArr.join();
console.log(newArr);           //It will return the string.

console.log("A",myArr);
const myArr2 = myArr.slice(1,3);    //It will return the short array from index 1 and 2.No change in original array
console.log(myArr2);
console.log("B", myArr);
const myArr3 = myArr.splice(1,3);     //It pulls the values which is given and create a new array which is left.
console.log(myArr3);                 
console.log("C",myArr);