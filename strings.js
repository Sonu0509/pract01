let str ="my name is sonu katiyar";



const checkVowels=(ab)=>{

    let vle= "aeiouyz" ;
for (let a of vle ){

    if(!(ab.includes(a))){
       return false;

    }
}
return true;
// console.log(ab.includes(a));

    
    
}
  console.log(checkVowels(str));
