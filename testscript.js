

const prompt = require("prompt-sync")();
let userInput = prompt("Enter a fruit:");
let fruits = ["apple", "banana", "orange"];

// if (fruits.includes(userInput.toLowerCase())) {
//   console.log("Yes, we have that fruit!");
// } else {
//   console.log("Sorry, not available.");
// }

// fruits.map((val)=>{
//    console.log(val);
// });


// let arr = fruits.map((val)=>{
//  return val.toLocaleUpperCase();
// });
// console.log(arr);
  


//  fruits.forEach((val)=>{
//  let a= val.toLocaleUpperCase();
//   console.log(a);
// });


for(i=0;i<=fruits.length;i++){
    console.log(fruits[i]);
}