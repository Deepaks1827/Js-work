const score =400;
console.log(score);

const newNum = new Number(500);
console.log(newNum.toString());
console.log(newNum.toFixed(1));
const newNum1 = 123.976788;
console.log(newNum1.toPrecision(2));
console.log(newNum1.toPrecision(3));

// *************Math ********************

console.log(Math.abs(-39));
console.log(Math.round(3.91));
console.log(Math.ceil(3.9));
console.log(Math.floor(3.9));
console.log(Math.min(3,9,5,7));
console.log(Math.abs(3,6,1,7,90));

console.log(Math.random());
console.log((Math.random()*10)+1  );
console.log(Math.floor((Math.random()*10) + 1  ));
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min +1)+min));


// ******Date********
// const date = new Date();
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// const myCreatedDate = Date(2023,0,24,5,3);
// console.log(myCreatedDate.toLocaleDateString);
let myDate =new Date;
console.log(myDate.getMonth()+1);
console.log(myDate.toLocaleString('default',{
    weekday:"long",
    day:"numeric"
}));






