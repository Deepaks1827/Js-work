const str1 = "Deepak";
const vari = 26;

console.log(str1 + vari + " Shukla");

// String interpolation Modern Way to write.here we can also use function with variable.

console.log(`My name is ${str1} my age is ${vari}`);

//Using new keyword.

const myName = new String("Deep-ak-Ji        ");

console.log(myName[1]);
console.log(myName.length);
// console.log(myName.__proto__);
console.log(myName.toLocaleUpperCase());
console.log(myName.charAt(3));
console.log(myName.indexOf('J'));
const newString = myName.substring(0,5);
console.log(newString);

const newString1 = myName.slice(0,3);
console.log(newString1);
const newString2 = myName.trim();
console.log(newString2);

const url = "https://www.google.com%30.co.in";
console.log(url.replace('%30','-'));
console.log(myName.split('-'));

