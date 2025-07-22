{/* <h1>search it</h1>


let arr =["A","b","c","D"];
let user1 = document .getElementById("user1");
let newBtn = document.getElementById("newBtn");
// let checkFnx=()=>{
//     for(let i=0;i<=arr.length;i++){
//      let a =  arr[i].toString().toLowerCase().includes(user1.value.toLowerCase());
//      console.log(a);
//     };
// }

let checkFnx=()=>{
    arr.filter((val)=>{
       if(val===user1){
        console.log(val);
      
       }
    })
}




newBtn.addEventListener("click",()=>{
    checkFnx();
}) */}




// let arr = ["A", "b", "c", "D"];
// let user1 = document.getElementById("user1");
// let newBtn = document.getElementById("newBtn");

// let checkFnx = () => {
//  let ab = arr.find((val)=>{
//     val.toLowerCase() === user1.toLowerCase()
//  })
//     }


// newBtn.addEventListener("click", () => {
//     checkFnx();
// });


let arr = ["A", "b", "c", "D"];
let user1 = document.getElementById("user1");
let newBtn = document.getElementById("newBtn");

let checkFnx = () => {
    let input = user1.value.toLowerCase(); // get user input
    let found = arr.find((val) => val.toLowerCase() === input); // search match

    if (found) {
        console.log("Match found:", found);
    } else {
        console.log("No match found");
    }
};

newBtn.addEventListener("click", () => {
    checkFnx();
});
