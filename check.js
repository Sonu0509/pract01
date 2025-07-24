// let arr = ["a","S","d","FR"];
// let b = arr.toString().toUpperCase();
// console.log(b);


// let arr =["A","b","c","D"];
// let user2 = arr.toString().toLowerCase();
// console.log(user2);



// let arr = ["Apple", "Banana", "Mango"];
// let input = "banana";

// let found = arr.find(item => item.toLowerCase() === input.toLowerCase());
// console.log(found); // "Banana"


// let arr = ["apple", "banana", "mango"];
// let exists = arr.includes(item => item === "apple");
// console.log(exists); // true


// let arr = [11, 1, 31,14, 15, 16, 17, 18, 14];

//   let a = arr.filter((b,index,arr)=>{
//     return  arr.findIndex(b)===index
//   })
//   console.log(a);


//  let arr = [11, 1, 31,14, 15, 16, 17, 18, 14];
// let a =arr.filter((a,index)=>{
//    return a===41;
//     })

//   console.log(a);











// let arr = [11, 21, 13, 14, 15, 16, 17, 18, 14];

// let a = arr.find((b, index, arr) => {
//   return 

// });

// console.log(a); // Output: [11, 21, 13, 14, 15, 16, 17, 18]








 let arr = [11, 21, 13, 14, 15, 16, 17, 18, 14];

//  let a = arr.find((elm)=>{
//    return elm>=13
//  });
//   console.log(a);

// let a =arr.indexOf(11);
// console.log(a)

// let a = arr.findIndex((elm)=>{
//     return elm===21
// });
// console.log(a)

let c = arr.filter((elm,index)=>{
 return   arr.findIndex((ab)=>{
   return  ab===elm
}) === index;

});
console.log(c);
