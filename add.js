// let nameRAj =document.getElementById("item").value; 


let arr = [];


function addTo(productName,price){

    arr.push({name:productName ,price:price});



let li =document.createElement("li");
li.innerText =productName +":"+price;
  document.getElementById("list").appendChild(li);

};

// let cartArray = [];

// function clickAdd(productName, price) {
//     // 1. Cart array me item add karo
//     cartArray.push({ name: productName, price: price });

//     // 2. List me item add karo
//     let li = document.createElement("li");
//     li.innerText = productName + " : ₹" + price;
//     document.getElementById("list").appendChild(li);
// }
