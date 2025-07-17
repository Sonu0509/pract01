  function tri(row){

for(let i=1;i<=row;i++){
    let space =" ".repeat(row-i);
    let star ='*'.repeat(2*i - 1);
    console.log(space+star);
}
}
tri(12);

  