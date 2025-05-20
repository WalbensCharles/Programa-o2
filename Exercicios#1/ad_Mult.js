const prompt=require("prompt-sync")();

const imprimeS=(valor)=>{
    
    if(valor==0){
        return 0;
    }
    return valor+(imprimeS(valor-1));
}
let num=Number(prompt("digite um numero : "));
let resu=imprimeS(num);
console.log(`resultado: ${resu}`);