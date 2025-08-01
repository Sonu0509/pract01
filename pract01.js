
// const prompt = require("prompt-sync")();  

// let user =prompt("Enter the number");

// // let userip = prompt("Enter the value" + "   " );
// let num = 25;

// while(user !=num){
//     user =prompt("Try again")
// }
// console.log("Congratulaion ");

//.........................................................//



// let str1 = "apna ghar"
// let str2 = "kanpur"

// console.log("hello !"+str1+"   "+str2);

// console.log("hello!" .concat("        ",str1, "                  ",str2)); 



// for (let a of str1)
// {
//     console.log(a.toUpperCase());
// }


// let arr = [1,2,3,4,5];


// let ar1 = arr.filter((val)=>{
//     return val>=5;
// });

// console.log(ar1)

// let ar2 = arr.map((val)=>{
//     return val>=5;
// });

// console.log(ar2)

// arr.forEach((val) => {
//     console.log(val>=4);
// });



// let arr = [10,20,30,40,50,30,40];
// const a =arr.reduce((aqe,curr)=>{
//      aqe[curr]=(aqe[curr]||0)+1;
//     return aqe;
// },{});



// console.log(a);



// let arr1 = [10, 20, 30, 40, 50, 30, 40];
// const counts = {};

// for (let num of arr1) {
//   counts[num] = (counts[num] || 0) + 1;
// }

// console.log(counts);




// let arr2 = [10,20,30,40,50,30,40];

// let output= arr2.reduce((pre,curr)=>{
 
 
//  if(pre>curr){
      

//         return pre;
//     }
//     else{
      
//         return curr;
//     }
    
 
//     // return (pre>curr)?pre:curr;
  
// });

// console.log(`Max no of =  ${output}`);




const prompt = require("prompt-sync")();  

let user =prompt("Enter the number  =");
   
for(let i=1;i<=user;i++){
     console.log(i);
}
