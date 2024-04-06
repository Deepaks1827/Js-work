//Array..
// const arr = [1,2,3,4,5];   // It took the direct reference to the memory it means we can directly change the value.
// console.log(arr);
// const myArr = new Array(3,5,8,9,0);
// console.log(myArr[3]);

//Array Methods.
// myArr.push(10);
// console.log(myArr);  //push the value at the end
// myArr.pop();         //pop the value from last
// console.log(myArr);
// myArr.unshift(20);   // put the value at the initial place
// console.log(myArr);
// myArr.shift();       // pull the first value.
// console.log(myArr);
// console.log(myArr.includes(10)); // will return boolean value if value not present there. 
// console.log(myArr.indexOf(3));   //will return index 
// const newArr = myArr.join();
// console.log(newArr);           //It will return the string.

// console.log("A",myArr);
// const myArr2 = myArr.slice(1,3);    //It will return the short array from index 1 and 2.No change in original array
// console.log(myArr2);
// console.log("B", myArr);
// const myArr3 = myArr.splice(1,3);     //It pulls the values which is given and create a new array which is left.
// console.log(myArr3);                 
// console.log("C",myArr);


let arr1 = [10,20,30,40]
let arr2 = [100,200,300,400]         //Its pushes the whole array inside the array.
// arr2.push(arr1);
// console.log(arr2);

// let arr3= arr2.concat(arr1);    //It concat two arrays.
// console.log(arr3);

// let arr4 = [...arr1,...arr2];     //Here we can add more than 2 arrays it is a spread operator.
// console.log(arr4);

// let arr5 = [1,2,3,[10,30,90],[23,33,53,[45,40,41,[9010,1090]]]]    //it coverts multid array to 1d array.
// console.log(arr5.flat(Infinity));

console.log(Array.isArray("Deepak"));                  //Return boolean value.
console.log(Array.from("Deepak"));                      // convert to array 
console.log(Array.from({name:"Deepak"}));        //here we have to tell either key or value which one have to convert.      